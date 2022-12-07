<template>
    <div class="class-selected-content">
        <div class="content-header">
            <div class="header-item">
                <span class="item-title"> Algebra </span>
                <span class="item-subtitle">
                    Regular Class - TTH (9:00am-10:00am)
                </span>
            </div>
        </div>
        <br />
        <br />
        <div class="content-body">
            <v-tabs v-model="tab" grow>
                <v-tab v-for="item in items" :key="item">
                    {{ item }}
                </v-tab>
            </v-tabs>
            <v-divider />
            <br />
            <br />
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-col cols="4">
                        <v-select
                            v-model="filter_text"
                            :items="filter"
                            dense
                            filled
                            outlined
                        />
                    </v-col>
                    <v-col cols="12" class="all-classes">
                        <v-card
                            class="card"
                            hover
                            v-for="(item, index) in filter_results"
                            :key="index"
                        >
                            <v-card-text class="card-content">
                                <div
                                    class="card-status-new"
                                    v-if="item.status === 'New'"
                                >
                                    NEW
                                </div>
                                <div
                                    class="card-status-done"
                                    v-else-if="item.status === 'Done'"
                                >
                                    DONE
                                </div>
                                <div
                                    class="card-status-closed"
                                    v-else-if="item.status === 'Closed'"
                                >
                                    CLOSED
                                </div>
                                <div
                                    class="card-status-unsubmitted"
                                    v-else-if="item.status === 'Unsubmitted'"
                                >
                                    <span>UNSUB</span>
                                </div>
                                <div class="card-details">
                                    <div class="details-title">
                                        <span class="title-main">
                                            {{ item.title }}
                                        </span>
                                        <span class="title-sub">
                                            {{ item.description }}
                                        </span>
                                    </div>
                                    <br />
                                    <div class="card-bottom">
                                        <div class="details-due">
                                            {{ item.due }}
                                        </div>
                                        <v-hover v-slot="{ hover }">
                                            <v-btn
                                                :outlined="hover ? false : true"
                                                :color="
                                                    hover
                                                        ? 'primary'
                                                        : '#A3A3A3'
                                                "
                                            >
                                                Answer
                                            </v-btn>
                                        </v-hover>
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-tab-item>
            </v-tabs-items>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tab: 0,
            items: ["Assignments", "Class Roster", "Grades", "Class Details"],

            filter: ["All", "New", "Done", "Closed", "Unsubmitted"],

            filter_text: "All",

            all_classes: [
                {
                    status: "New",
                    title: "Implicit Differentiation (Level 1)",
                    description: "Assignment 1",
                    due: "Due: November 04, 2022 8:00 pm",
                },

                {
                    status: "New",
                    title: "Implicit Differentiation (Level 1)",
                    description: "Assignment 1",
                    due: "Due: November 04, 2022 8:00 pm",
                },

                {
                    status: "Done",
                    title: "Implicit Differentiation (Level 1)",
                    description: "Assignment 1",
                    due: "Due: November 04, 2022 8:00 pm",
                },

                {
                    status: "Done",
                    title: "Implicit Differentiation (Level 1)",
                    description: "Assignment 1",
                    due: "Due: November 04, 2022 8:00 pm",
                },

                {
                    status: "Done",
                    title: "Implicit Differentiation (Level 1)",
                    description: "Assignment 1",
                    due: "Due: November 04, 2022 8:00 pm",
                },

                {
                    status: "Closed",
                    title: "Implicit Differentiation (Level 1)",
                    description: "Assignment 1",
                    due: "Due: November 04, 2022 8:00 pm",
                },

                {
                    status: "Unsubmitted",
                    title: "Implicit Differentiation (Level 1)",
                    description: "Assignment 1",
                    due: "Due: November 04, 2022 8:00 pm",
                },
            ],
        };
    },

    computed: {
        filter_results() {
            var arr = [];
            for (var index in this.all_classes) {
                if (this.all_classes[index].status === this.filter_text) {
                    arr.push(this.all_classes[index]);
                }
            }
            if (this.filter_text === "All") {
                return this.all_classes;
            }
            return arr;
        },
    },
};
</script>

<style scoped>
* {
    text-transform: none;
}

.class-selected-content {
    width: 100%;
}

.content-header {
    width: 100%;
    display: flex;
    padding: 40px 5%;
    background-color: var(--blue-1);
}

.header-item {
    display: flex;
    flex-direction: column;
}

.item-title {
    font-size: 1.5em;
    color: var(--white-1);
}

.item-subtitle {
    color: var(--gray-1);
}

.content-body {
    width: 75%;
    margin: auto;
    margin-bottom: 100px;
}

.all-classes {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.card {
    width: 55%;
}

.card-content {
    width: 100%;
    display: flex;
    gap: 20px;
}

.card-status-new {
    width: 120px;
    height: auto;
    background-color: rgb(173, 255, 200);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(0, 150, 67);
}

.card-status-done {
    width: 120px;
    height: auto;
    background-color: rgb(183, 223, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(0, 97, 177);
}

.card-status-closed {
    width: 120px;
    height: auto;
    background-color: rgb(255, 183, 183);
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
}

.card-status-unsubmitted {
    width: 120px;
    height: auto;
    background-color: rgb(228, 228, 228);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(110, 110, 110);
}

.card-details {
    width: 100%;
}

.details-title {
    display: flex;
    flex-direction: column;
}

.title-main {
    font-size: 1.2em;
    font-weight: bold;
    color: black;
}

.card-bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
