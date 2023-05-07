<template>
    <AppAside class="menu">
        <AppLogo 
            class="menu__logo"
        />
        <MenuNavigation 
            class="menu__navigation"
        />
        <MenuUser />
    </AppAside>
</template>

<script setup>
    import './AppMenu.scss';
    
    import AppLogo from '../AppLogo/AppLogo.vue';
    import MenuUser from './MenuUser/MenuUser.vue';
    import AppAside from '~/components/AppAside/AppAside.vue'
    import MenuNavigation from './MenuNavigation/MenuNavigation.vue';
</script>
