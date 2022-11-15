<template>
    <div class="main-content">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    fab
                    outlined
                    x-small
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="getCurrentData()"
                >
                    <v-icon dense>mdi-trash-can</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-toolbar color="error" dark>
                    <span class="text-h6">Remove Details</span>
                </v-toolbar>
                <v-card-text>
                    <br />
                    <v-row dense>
                        <v-col cols="12">
                            <v-text-field
                                label="School"
                                required
                                outlined
                                :value="current_item.school"
                                disabled
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                label="Degree (Optional)"
                                outlined
                                :value="current_item.course"
                                disabled
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                label="Area of Study (Optional)"
                                outlined
                                :value="current_item.field"
                                disabled
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-autocomplete
                                label="From"
                                :items="[
                                    '2010',
                                    '2011',
                                    '2012',
                                    '2013',
                                    '2014',
                                    '2015',
                                    '2016',
                                    '2017',
                                    '2018',
                                    '2019',
                                    '2020',
                                    '2021',
                                    '2022',
                                ]"
                                required
                                outlined
                                type="number"
                                :value="current_item.start_year"
                                disabled
                            >
                            </v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-autocomplete
                                label="To (expected year)"
                                :items="[
                                    '2010',
                                    '2011',
                                    '2012',
                                    '2013',
                                    '2014',
                                    '2015',
                                    '2016',
                                    '2017',
                                    '2018',
                                    '2019',
                                    '2020',
                                    '2021',
                                    '2022',
                                ]"
                                required
                                outlined
                                type="number"
                                :value="current_item.end_year"
                                disabled
                            >
                            </v-autocomplete>
                        </v-col>
                        <v-col cols="12">
                            <v-card-actions class="justify-end">
                                <v-btn text @click="dialog = false">
                                    Cancel
                                </v-btn>
                                <v-btn
                                    color="error"
                                    dark
                                    @click="removeEducationItem()"
                                >
                                    Remove
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { ProfilePageService } from "@/api/Teacher/profile_page/ProfiilePageData"; //this is a class {}

export default {
    props: {
        item_index: Number,
    },

    data: () => ({
        profile_page:
            ProfilePageService.prototype.getProfilePageData()[3].education,

        current_item: {
            field: "",
            school: "",
            course: "",
            start_year: "",
            end_year: "",
        },

        dialog: false,
    }),

    methods: {
        getCurrentData() {
            this.current_item = this.profile_page[this.item_index];
        },

        removeEducationItem() {
            ProfilePageService.prototype.removeEducationItemByIndex(
                this.item_index
            );
            this.$emit(
                "SnackbarSuccess",
                "Education details successfully removed"
            );
            this.dialog = false;
        },
    },
};
</script>

<style scoped>
.v-btn {
    text-transform: none;
}
</style>
