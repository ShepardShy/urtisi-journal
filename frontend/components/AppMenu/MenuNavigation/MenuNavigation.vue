<template>
    <div class="navigation">
        <NuxtLink 
            class="navigation__item" 
            v-for="navigation in commonStore.navigation.filter(link => link.root == userStore.user.root)" 
            :class="$route.path == navigation.link ? 'navigation__item_active' : ''" 
            :to="navigation.link" 
        >
            <AppImage 
                :img="$route.path == navigation.link ? navigation.img_active : navigation.img"
                class="navigation__icon"
            />
            <div class="navigation__title">
                {{ navigation.title }}
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
    import './MenuNavigation.scss';
    
    import AppImage from '~/components/AppImage/AppImage.vue';

    import { useCommonStore } from '@/stores/commonStore.js'
    import { useUserStore } from '@/stores/userStore.js'
    const userStore = useUserStore()
    const commonStore = useCommonStore()
</script>
