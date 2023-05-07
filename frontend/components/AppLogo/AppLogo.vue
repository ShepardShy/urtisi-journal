<template>
    <AppImage 
        :img="commonStore.logo"
    />
</template>

<script setup>
    import './AppLogo.scss';

    import AppImage from '../AppImage/AppImage.vue';
    
    import { useCommonStore } from '@/stores/commonStore.js'
    const commonStore = useCommonStore()
    
</script>
