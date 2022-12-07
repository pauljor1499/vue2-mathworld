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
                            :items="filter"
                            dense
                            filled
                            outlined
                            placeholder="Filter"
                        />
                    </v-col>
                    <v-col cols="12" class="all-classes">
                        <v-card
                            class="card"
                            hover
                            v-for="(item, index) in all_classes"
                            :key="index"
                        >
                            <v-card-text class="card-content">
                                <div
                                    class="card-status-new"
                                    v-if="item.status === 'new'"
                                >
                                    NEW
                                </div>
                                <div
                                    class="card-status-done"
                                    v-else-if="item.status === 'done'"
                                >
                                    DONE
                                </div>
                                <div
                                    class="card-status-closed"
                                    v-else-if="item.status === 'closed'"
                                >
                                    CLOSED
                                </div>
                                <div
                                    class="card-status-unsubmitted"
                                    v-else-if="item.status === 'unsubmitted'"
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

            all_classes: [
                {
                    status: "new",
                    title: "Implicit Differentiation (Level 1)",
                    description: "Assignment 1",
                    due: "Due: November 04, 2022 8:00 pm",
                },

                {
                    status: "done",
                    title: "Implicit Differentiation (Level 1)",
                    description: "Assignment 1",
                    due: "Due: November 04, 2022 8:00 pm",
                },

                {
                    status: "closed",
                    title: "Implicit Differentiation (Level 1)",
                    description: "Assignment 1",
                    due: "Due: November 04, 2022 8:00 pm",
                },

                {
                    status: "unsubmitted",
                    title: "Implicit Differentiation (Level 1)",
                    description: "Assignment 1",
                    due: "Due: November 04, 2022 8:00 pm",
                },
            ],
        };
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
