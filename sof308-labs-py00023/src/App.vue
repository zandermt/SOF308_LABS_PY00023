<template>
  <div>
    <LabNavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import LabNavBar from "./components/LabNavBar.vue";

export default {
  name: "App",
  components: {
    LabNavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
