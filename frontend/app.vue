<template>
  <div class='wrapper'>
    <AppMain>
      <AppMenu v-if="$route.path != '/auth'"/>
      <NuxtPage />
    </AppMain>
  </div>
</template>

<script setup>
  import '~~/assets/fonts/fonts.css'
  import '~~/assets/default.scss'

  import AppMenu from './components/AppMenu/AppMenu.vue';
  import AppMain from './components/AppMain/AppMain.vue';

  import api from '@/helpers/api.js'

  onMounted(() => {
    let data = getData()
  })

  const getData = async () => {
    return await api.callMethod("GET", `objects/orders`);
  } 
</script>