<template>
    <AppTable>
        <StudentJournalTableHeader />
        <StudentJournalTableBody />
    </AppTable>
</template>

<script setup>
    import './StudentJournalTable.scss';
    
    import AppTable from '@/components/AppTable/AppTable.vue'
    import StudentJournalTableBody from './StudentJournalTableBody/StudentJournalTableBody.vue';
    import StudentJournalTableHeader from './StudentJournalTableHeader/StudentJournalTableHeader.vue';
</script>
