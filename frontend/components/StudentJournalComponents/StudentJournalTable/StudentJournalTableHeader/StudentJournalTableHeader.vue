<template>
    <TableHeader>
        <TableRow>
            <th class="table__item" v-for="item in tableKeys" :title="item.theme"  :style="`--default-width: ${item.width}`">
                {{ item.title }}
            </th>
        </TableRow>
    </TableHeader>
</template>

<script setup>
    import './StudentJournalTableHeader.scss';
    
    import TableHeader from '~/components/AppTable/TableHeader/TableHeader.vue'
    import TableRow from '~/components/AppTable/TableRow/TableRow.vue'
    import { useJournalStore } from '@/stores/journalStore.js'
    const journalStore = useJournalStore()
    
    const tableKeys = computed(() => {
        return journalStore.journalTableKeys.filter(p => p.subject == journalStore.activeSubject)[0].data.sort((prev, next) => prev.sort - next.sort)
    })
</script>
