<template>
    <AppTable class="table__shedule">
        <EducatorScheduleTableHeader />
        <EducatorScheduleTableBody />
    </AppTable>
</template>

<script setup>
    import './EducatorScheduleTable.scss'

    import AppTable from '@/components/AppTable/AppTable.vue'
    import EducatorScheduleTableBody from './EducatorScheduleTableBody/EducatorScheduleTableBody.vue';
    import EducatorScheduleTableHeader from './EducatorScheduleTableHeader/EducatorScheduleTableHeader.vue';
    
</script>