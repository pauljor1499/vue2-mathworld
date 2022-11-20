<template>
    <div class="main-container">
        <Section1 />
        <Mission />
        <Vision />
        <Section3 />
        <Section4 />
    </div>
</template>

<script>
import Section1 from "@/components/Main/about_page/Section1.vue";
import Vision from "@/components/Main/about_page/Vision.vue";
import Section3 from "@/components/Main/about_page/Section3.vue";
import Section4 from "@/components/Main/about_page/Section4.vue";
import Mission from "@/components/Main/about_page/Mission.vue";

export default {
    components: { Section1, Mission, Vision, Section3, Section4 },
};
</script>
