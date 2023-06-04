<template>
    <AppTable class="table__educator">
        <EducatorJournalTableHeader />
        <EducatorJournalTableBody 
            @changeMark="(data) => $emit('changeMark', data)"
        />
    </AppTable>
</template>

<script setup>
    import './EducatorJournalTable.scss';
    
    import AppTable from '@/components/AppTable/AppTable.vue'
    import EducatorJournalTableBody from './EducatorJournalTableBody/EducatorJournalTableBody.vue';
    import EducatorJournalTableHeader from './EducatorJournalTableHeader/EducatorJournalTableHeader.vue';
</script>
