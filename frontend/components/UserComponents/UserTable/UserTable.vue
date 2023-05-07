<template>
    <AppTable class="user__table">
        <UserTableHeader />
        <UserTableBody />
    </AppTable>
</template>

<script setup>
    import './UserTable.scss';
    
    import AppTable from '~/components/AppTable/AppTable.vue';
    import UserTableHeader from './UserTableHeader/UserTableHeader.vue';
    import UserTableBody from './UserTableBody/UserTableBody.vue';
</script>
