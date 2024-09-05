<script>
import AppHeader from './components/AppHeader.vue';
import AppSidebar from './components/AppSidebar.vue';
  export default {
    components: {
      AppHeader,
      AppSidebar
    }
  }
</script>

<template>
    <main class="overflow-auto">
        <router-view></router-view>
        <AppSidebar></AppSidebar>
    </main>
</template>


<style lang="scss">
@use './style/generic';
@use './style/partials/variables' as *;
main{
        background-image: url('./assets/hero.jpg');
        height: 100vh;
        width: 100%;
        background-size: cover;
        background-position: bottom;
        position: relative;
        margin-bottom: 90px;
    }
</style>