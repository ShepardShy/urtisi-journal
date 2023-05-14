<template>
    <AppTable class="table__shedule">
        <StudentScheduleTableHeader />
        <StudentScheduleTableBody />
    </AppTable>
</template>

<script setup>
    import './StudentScheduleTable.scss'

    import AppTable from '@/components/AppTable/AppTable.vue'
    import StudentScheduleTableBody from './StudentScheduleTableBody/StudentScheduleTableBody.vue';
    import StudentScheduleTableHeader from './StudentScheduleTableHeader/StudentScheduleTableHeader.vue';
    
</script>