<template>
    <header>
        <YesNoWarning
            v-if="dialog.status"
            @clickNo="dialog.status = false"
            @clickYes="clickLogout()"
            :dialog_prop="this.dialog"
        />
        <div class="logo">
            <router-link :to="'/student'" class="link">
                <h1>Math</h1>
                <span>World</span>
            </router-link>
        </div>

        <div class="main-nav">
            <router-link :to="'/student'" class="nav-link">
                <span>Classes</span>
            </router-link>
            <router-link :to="'/student/dashboard'" class="nav-link">
                <span>Dashboard</span>
            </router-link>
            <router-link :to="'/student/schedules'" class="nav-link">
                <span>Schedules</span>
            </router-link>
            <router-link :to="'/student/assignments'" class="nav-link">
                <span>Assignments</span>
            </router-link>
            <router-link :to="'/student/grades'" class="nav-link">
                <span>Grades</span>
            </router-link>
        </div>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <button class="profile-icon" v-bind="attrs" v-on="on">
                    <v-avatar size="40px" v-if="teacher_photo != ''">
                        <img :src="teacher_photo" alt="" />
                    </v-avatar>
                    <v-avatar size="40px" color="primary" v-else>
                        <span style="color: white"> {{ name_initial }} </span>
                    </v-avatar>
                </button>
            </template>

            <v-list dense>
                <v-list-item
                    class="item1"
                    link
                    dense
                    v-for="(person, index) in persons"
                    :key="index"
                    @click="
                        $router.push('/teacher/profile').catch((err) => err)
                    "
                >
                    <div class="item1-details">
                        <div class="details-email">
                            <span> Sign in as </span>
                        </div>
                        <div class="details-name">
                            <span>
                                {{ person.name }}
                            </span>
                        </div>
                    </div>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item
                    link
                    dense
                    @click="
                        $router.push('/teacher/profile').catch((err) => err)
                    "
                >
                    <span> Profile </span>
                </v-list-item>
                <v-list-item link dense>
                    <span> Account Settings </span>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item link dense @click="dialog.status = true">
                    <span> Logout </span>
                </v-list-item>
            </v-list>
        </v-menu>
    </header>
</template>

<script>
import { ProfilePageService } from "@/api/Teacher/profile_page/ProfiilePageData.js";
import YesNoWarning from "@/components/Teacher/main/dialogs/YesNoWarning.vue";

export default {
    components: {
        YesNoWarning,
    },

    props: {
        photo: String,
    },

    data: () => ({
        persons: [
            {
                name: "Jordan Williams",
                email: "jordanwilliams@gmail.com",
            },
        ],

        name_initial: "",

        profile_page: ProfilePageService.prototype.getProfilePageData(),
        teacher_photo: "",

        dialog: {
            status: false,
            title: "Exit",
            message: "Do you want to logout?",
        },
    }),

    methods: {
        clickLogout() {
            this.$router.push("/").catch((err) => err);
        },

        getPhoto() {
            this.teacher_photo = this.profile_page[0].credentials.default_image;
            if (this.teacher_photo == "") {
                this.name_initial +=
                    this.profile_page[0].credentials.first_name.substring(0, 1);
                this.name_initial +=
                    this.profile_page[0].credentials.last_name.substring(0, 1);
            }
        },
    },

    watch: {
        photo() {
            this.teacher_photo = this.photo;
        },
    },

    created() {
        this.getPhoto();
    },
};
</script>

<style scoped>
li,
span,
.link,
.nav-link {
    text-decoration: none;
    list-style: none;
    text-transform: initial;
}

header {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0px 5% 0px 5%;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
}

.logo {
    display: flex;
    align-items: center;
}

.logo h1 {
    float: left;
}

span {
    color: black;
}

.main-nav {
    display: flex;
    align-items: center;
}

.main-nav .nav-link {
    font-size: 1.2em;
    padding: 35px 20px 35px 20px;
    border-bottom: 3px solid white;
}

.main-nav .nav-link:hover {
    background-color: var(--blue-2);
    border-bottom: 3px solid var(--blue-1);
}

.main-nav a.router-link-exact-active {
    background-color: var(--blue-2);
    border-bottom: 3px solid var(--blue-1);
}

.logo span {
    font-size: 2em;
}

.profile-icon {
    width: 50px;
    height: 50px;
}

.profile-icon img {
    border-radius: 50%;
    width: 100%;
}

.v-list {
    padding: 0px;
}

.v-list-item {
    padding: 10;
    font-size: 0.8em;
}

.item1 {
    width: 100%;
    padding: 10px 15px 10px 15px;
}

.item1 .item1-avatar {
    width: 30px;
    height: 30px;
}

.item1 .item1-avatar img {
    border-radius: 50%;
    width: 100%;
}

.item1 .item1-details {
    width: 150px;
}

.item1-details .details-name {
    font-weight: bold;
}

.item1-details .details-email {
    opacity: 75%;
}
</style>
