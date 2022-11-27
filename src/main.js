import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VCalendar from "v-calendar";

Vue.use(VCalendar, {
    componentPrefix: "vc", // Use <vc-calendar /> instead of <v-calendar />
    screens: {
        mobile: "640px",
        tablet: "576px",
        laptop: "992px",
        desktop: "1200px",
    },
});

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
