<script>
import MeteorologicalParameter from "@/components/sideBar/MeteorologicalParameter.vue";
import TabsBar from "@/components/TabsBar.vue";
import SideBar from "@/components/sideBar/SideBar.vue";


export default {
    name: "App",
    components: {
        SideBar,
        TabsBar,
        MeteorologicalParameter,
    },
    created() {
        // Retrieve the stations at app start.
        this.$store.dispatch("setStationsFromAPI");
    }
}
</script>

<template>
    <div class="app">
        <v-app>
            <v-app-bar title="WeKG-MF-based Agrometeorological Parameters Computing and Visualisation"
                color="primary"></v-app-bar>
            <v-navigation-drawer :permanent="true" :width="400">
                <SideBar></SideBar>
            </v-navigation-drawer>
            <v-main style="min-height: 300px;">
                <TabsBar></TabsBar>
            </v-main>
        </v-app>
    </div>
</template>

// global styles
<style>
body {
    margin: 0;
    padding: 0;
}
</style>

<style scoped>
.app {
    display: flex;
    flex-direction: column;
}
</style>
