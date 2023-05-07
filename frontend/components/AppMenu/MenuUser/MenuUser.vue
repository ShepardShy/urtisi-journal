<template>
    <NuxtLink 
        to="/user" 
        class="navigation__item navigation__item_user" 
        :class="$route.path == '/user' ? 'navigation__item_active' : ''" 
        v-if="userStore.user.root == 'student'"
    >
        <AppImage 
            class="navigation__icon"
            :img="$route.path == '/user' ? {
                src: '/icons/user_active.svg',
                alt: 'Иконка. Пользователь'
            } : {
                src: '/icons/user.svg',
                alt: 'Иконка. Пользователь'
            }"
        />
        <div class="navigation__title">
            {{ userStore.user.name.split(' ').slice(0, 2).join(' ') }}
        </div>
    </NuxtLink>
</template>

<script setup>
    import './MenuUser.scss';
    
    import { useUserStore } from '@/stores/userStore.js'
    const userStore = useUserStore()
</script>
