import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VCalendar from "v-calendar";
// import VueKatex from "vue-katex";
// import "katex/dist/katex.min.css";

// Vue.use(VueKatex, {
// 	globalOptions: {
// 		//... Define globally applied KaTeX options here
// 	},
// });

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
