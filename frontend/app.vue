<template>
  <div class='wrapper'>
    <AppMenu v-if="$route.path != '/auth'"/>
    <AppMain>
      <NuxtPage />
    </AppMain>
  </div>
</template>

<script setup>
  import '~~/assets/fonts/fonts.css'
  import '~~/assets/default.scss'

  import AppMenu from './components/AppMenu/AppMenu.vue';
  import AppMain from './components/AppMain/AppMain.vue';

</script>