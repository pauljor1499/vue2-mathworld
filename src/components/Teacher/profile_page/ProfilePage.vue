<template>
    <div class="main-content">
        <div class="content-title">
            <h2>My Profile</h2>
            <v-btn
                rounded
                color="#ffff"
                @click="edit_mode = !edit_mode"
                v-show="!edit_mode"
                id="edit-profile"
            >
                Edit Profile
            </v-btn>
            <v-btn
                rounded
                color="#ffff"
                @click="edit_mode = !edit_mode"
                v-show="edit_mode"
                >Exit Edit Mode</v-btn
            >
        </div>
        <div class="content-body">
            <div class="left-section">
                <div class="teacher-section">
                    <div class="teacher-actions">
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            ref="file"
                            @change="change"
                        />
                        <v-fab-transition>
                            <v-btn
                                color="blue"
                                fab
                                large
                                dark
                                v-show="edit_mode"
                                @click="browseImage()"
                            >
                                <v-icon>mdi-camera</v-icon>
                            </v-btn>
                        </v-fab-transition>
                    </div>
                    <div class="teacher-image">
                        <img :src="this.my_image" alt="No Photo" />
                    </div>
                </div>
            </div>
            <div class="right-section">
                <div class="teacher-credentials">
                    <div class="credentials-header">
                        <div class="teacher-name">
                            {{ this.credentials_data.name }}
                        </div>
                    </div>
                    <div class="teacher-email">
                        {{ this.credentials_data.email }}
                    </div>
                    <div class="teacher-position">
                        {{ this.credentials_data.position }}
                    </div>
                </div>

                <div class="teacher-office">
                    <div class="office-title">Office Details</div>
                    <div class="office-body">
                        <div class="office-location">
                            <div class="label">Location</div>
                            <div class="text">
                                {{ office_data.location }}
                            </div>
                        </div>
                        <div class="office-time">
                            <div class="label">Free time</div>
                            <div class="text">
                                {{ office_data.free_time }}
                            </div>
                        </div>
                        <div class="office-phone-number">
                            <div class="label">Phone number</div>
                            <div class="text">
                                {{ office_data.phone_number }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="teacher-biography">
                    <div class="biography-header">
                        <div class="biography-title">Biography</div>
                        <div>
                            <v-fab-transition>
                                <div v-show="edit_mode">
                                    <AddBiographyDetails
                                        v-show="biography_data_isEmpty"
                                        @SnackbarSucces="
                                            showSuccessMessage($event)
                                        "
                                    />

                                    <div
                                        class="biography-actions"
                                        v-show="!biography_data_isEmpty"
                                    >
                                        <RemoveBiographyDetails
                                            :biography_details="
                                                getBiographyData
                                            "
                                            @SnackbarSuccess="
                                                showSuccessMessage($event)
                                            "
                                        />
                                        <UpdateBiography
                                            :biography_details="
                                                getBiographyData
                                            "
                                            @SnackbarSuccess="
                                                showSuccessMessage($event)
                                            "
                                        />
                                    </div>
                                </div>
                            </v-fab-transition>
                        </div>
                    </div>
                    <div class="biography-body">
                        <div>
                            <p v-show="!biography_data_isEmpty">
                                {{ getBiographyData }}
                            </p>
                            <p v-show="biography_data_isEmpty">
                                <i>No Biography Details</i>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="teacher-education">
                    <div class="education-header">
                        <div class="education-title">Education</div>
                        <v-fab-transition>
                            <AddNewItem
                                v-show="edit_mode"
                                @SnackbarSuccess="showSuccessMessage($event)"
                            />
                        </v-fab-transition>
                    </div>
                    <div class="education-body">
                        <div
                            class="education-item"
                            v-for="(item, index) in education_data"
                            :key="index"
                        >
                            <div>
                                <div class="item-school">{{ item.school }}</div>
                                <div class="item-course">
                                    {{ item.course }}
                                </div>
                                <div class="item-level">{{ item.field }}</div>
                                <div class="item-year">
                                    {{ item.start_year }}-{{ item.end_year }}
                                </div>
                            </div>

                            <v-fab-transition>
                                <div
                                    class="education-options"
                                    v-show="edit_mode"
                                >
                                    <RemoveItem
                                        :item_index="index"
                                        @SnackbarSuccess="
                                            showSuccessMessage($event)
                                        "
                                    />
                                    <UpdateItem
                                        :item_index="index"
                                        @SnackbarSuccess="
                                            showSuccessMessage($event)
                                        "
                                    />
                                </div>
                            </v-fab-transition>
                        </div>
                        <p v-show="education_data_isEmpty">
                            <i>No Education Details</i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ProfilePageService } from "@/api/Teacher/profile_page/ProfiilePageData.js";
import AddNewItem from "./Modal/Add/AddNewItem.vue";
import UpdateItem from "./Modal/Update/UpdateItem.vue";
import RemoveItem from "./Modal/Remove/RemoveItem.vue";
import UpdateBiography from "./Modal/Update/UpdateBiography.vue";
import AddBiographyDetails from "./Modal/Add/AddBiographyDetails.vue";
import RemoveBiographyDetails from "./Modal/Remove/RemoveBiographyDetails.vue";

export default {
    components: {
        AddNewItem,
        UpdateItem,
        RemoveItem,
        UpdateBiography,
        AddBiographyDetails,
        RemoveBiographyDetails,
    },

    data: () => ({
        profile_page: ProfilePageService.prototype.getProfilePageData(),
        credentials_data: "",
        office_data: "",
        biography_data: "",
        education_data: [],

        my_image: null,

        edit_mode: false,

        success_message: "",
        snackbar: false,
    }),

    methods: {
        getAllData() {
            this.credentials_data = this.profile_page[0].credentials;
            this.office_data = this.profile_page[1].office;
            this.biography_data = this.profile_page[2].biography.content;
            this.education_data = this.profile_page[3].education;
            this.my_image = this.profile_page[0].credentials.default_image;

            //check photo
            if (this.my_image == "") {
                this.my_image =
                    "https://bl3301files.storage.live.com/y4mig3k2eXjpQxfoJYNLgqz0CgZxI4Ts5u3pCfrYBqkwBDkFuO2eQkSWQfJWuuk-_jQ3GGpuY4EiG1QAWGh3l289Hlva7czFh-8wHcCJWuMPBFUul7ItFwyJE7hRJNM9_CKgjCEQ3s19d8tqS7rVsFgHfKZ0jnL3KLG8jl1aPEEyb-yj33VbxcG7qwL7w0dm_ZT?width=300&height=300&cropmode=none";
            }
        },

        browseImage() {
            this.$refs.file.click();
        },

        change(e) {
            try {
                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = (e) => {
                    this.my_image = e.target.result;
                    this.uploadPhoto(this.my_image);
                    this.showSuccessMessage("Photo successfully uploaded");
                };
            } catch (err) {}
        },

        showSuccessMessage(message) {
            this.$emit("SnackbarSuccess", message);
        },

        uploadPhoto(photo) {
            this.$emit("UploadNewPhoto", photo);
        },
    },

    computed: {
        getBiographyData() {
            const all_data = this.profile_page[2].biography.content;
            return all_data;
        },

        biography_data_isEmpty() {
            if (this.getBiographyData == "") {
                return true;
            } else {
                return false;
            }
        },

        education_data_isEmpty() {
            if (this.education_data == "") {
                return true;
            } else {
                return false;
            }
        },
    },

    created() {
        this.getAllData();
    },
};
</script>

<style scoped>
.main-content {
    max-width: 100%;
    max-height: 100%;
}

.v-btn {
    text-transform: none;
}

.content-title {
    display: flex;
    justify-content: space-between;
    padding: 25px 5% 25px 5%;
    background-color: #0091de;
}

.content-title h2 {
    color: #ffff;
}

.content-body {
    display: flex;
    gap: 20px;
    padding: 5% 15% 5% 15%;
}

.left-section {
    flex: 0.6;
}

.teacher-section {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.teacher-actions {
    position: absolute;
    margin-left: 10%;
    margin-top: 12%;
}

.teacher-image {
    width: 220px;
    height: 220px;
}

.teacher-image img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
}

.right-section {
    flex: 2;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
}

.teacher-name {
    font-size: 1.5em;
    font-weight: bold;
}

.office-title {
    font-size: 1.2em;
    font-weight: bold;
}

.office-body {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    padding: 20px 0px 20px 0px;
    border-top: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
}

.office-body .text {
    font-weight: bold;
}

.office-location {
    width: 100%;
    border-right: 1px solid #e2e2e2;
}

.office-time {
    width: 100%;
    padding-left: 5%;
}

.office-phone-number {
    width: 100%;
    padding-left: 5%;
    border-left: 1px solid #c4c4c4;
}

.biography-header {
    display: flex;
    justify-content: space-between;
}

.biography-title {
    font-size: 1.2em;
    font-weight: bold;
}

.biography-actions {
    display: flex;
    gap: 20px;
}

.biography-body {
    width: 100%;
    height: auto;
    margin-top: 10px;
    text-align: justify;
    text-justify: inter-word;
}

.education-header {
    display: flex;
    justify-content: space-between;
}

.education-title {
    font-size: 1.2em;
    font-weight: bold;
}

.education-options {
    display: flex;
    align-items: center;
    gap: 20px;
}

.education-body {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
}

.education-item {
    display: flex;
    justify-content: space-between;
}
</style>
