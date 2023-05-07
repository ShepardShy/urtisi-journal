<template>
    <TableHeader>
        <TableRow>
            <th class="table__item" v-for="item in StudentJournalTableKeys" :style="`--default-width: ${item.width}`">
                {{ item.title }}
            </th>
        </TableRow>
    </TableHeader>
</template>

<script setup>
    import './StudentJournalTableHeader.scss';
    
    import TableHeader from '~/components/AppTable/TableHeader/TableHeader.vue'
    import TableRow from '~/components/AppTable/TableRow/TableRow.vue'
    import StudentJournalTableKeys from '../StudentJournalTableKeys.json'
</script>
