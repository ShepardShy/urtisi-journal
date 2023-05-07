<template>
    <div class="page user">
        <AppH1>
            Личный кабинет
        </AppH1>

        <AppSection>
            <div class="user__about">
                <AppH2> {{ userStore.user.name }} </AppH2>
                <UserInfo />
            </div>

            <AppH2 class="user__table-title"> Задолженности по предметам </AppH2>
            <UserTable />
        </AppSection>
    </div>
</template>

<script setup>
    import './UserComponents.scss';
    
    import AppH1 from '../AppH1/AppH1.vue';
    import AppH2 from '../AppH2/AppH2.vue';
    import AppSection from '../AppSection/AppSection.vue';
    import UserInfo from './UserInfo/UserInfo.vue';
    import UserTable from './UserTable/UserTable.vue'

    import { useUserStore } from '@/stores/userStore.js'
    const userStore = useUserStore()
</script>
