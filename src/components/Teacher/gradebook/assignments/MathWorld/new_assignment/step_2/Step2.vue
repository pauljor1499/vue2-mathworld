<template>
    <div class="main-content">
        <v-card-title>
            <h3>Questions</h3>
        </v-card-title>
        <br />
        <v-card outlined class="main-card">
            <v-tabs v-model="tab">
                <v-tab>
                    <span> Search Questions </span>
                </v-tab>
                <v-tab>
                    <span>Added Questions</span>
                    <v-chip
                        color="green"
                        style="color: #ffff"
                        v-show="selected_questions.length != 0"
                    >
                        {{ selected_questions.length }}
                    </v-chip>
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <br />
                <br />
                <v-tab-item>
                    <SearchQuestions
                        :has_error="hasErrors"
                        :return_question="getReturnedQuestions"
                        @add_question="addQuestion($event)"
                    />
                </v-tab-item>
                <v-tab-item>
                    <AddedQuestions
                        :selected_questions="getSelectedQuestions"
                        @remove_question="removeQuestion($event)"
                    />
                </v-tab-item>
                <br />
            </v-tabs-items>
        </v-card>
        <br />
        <v-card-actions>
            <div class="content-actions">
                <v-btn large width="15%" outlined @click="clickBack()">
                    Back
                </v-btn>
                <v-btn
                    large
                    width="15%"
                    color="primary"
                    :disabled="hasErrors"
                    @click="clickNext()"
                >
                    Next
                </v-btn>
            </div>
        </v-card-actions>
    </div>
</template>

<script>
import SearchQuestions from "./SearchQuestions.vue";
import AddedQuestions from "./AddedQuestions.vue";
import { MW_NewAssignment } from "@/api/Teacher/gradebook/assignments/MathWorld/NewAssignment";

export default {
    components: {
        SearchQuestions,
        AddedQuestions,
    },

    data() {
        return {
            selected_questions: [],
            return_questions: "",
            tab: null,
        };
    },

    methods: {
        clickNext() {
            if (this.submit()) this.$emit("clickNext");
        },

        clickBack() {
            this.$emit("clickBack");
        },

        addQuestion(added_questions) {
            this.selected_questions.push(added_questions);
        },

        removeQuestion(item) {
            this.return_questions = JSON.stringify(item);
        },

        submit() {
            return MW_NewAssignment.prototype.submit_Step2(
                this.selected_questions
            );
        },
    },

    computed: {
        hasErrors() {
            if (this.selected_questions == 0) {
                return true;
            } else {
                return false;
            }
        },

        getSelectedQuestions() {
            return this.selected_questions;
        },

        getReturnedQuestions() {
            return this.return_questions;
        },
    },
};
</script>

<style scoped>
span {
    font-size: 1rem;
}

.v-tabs {
    border-bottom: 1px solid #d4d4d4;
}

.main-card {
    padding: 40px;
}

.content-actions {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
</style>
