<template>
    <TableBody>
        <TableRow v-for="row in journalStore.journal.filter(p => (p.group == journalStore.activeGroup) && (p.subject == journalStore.activeSubject))" :class="row.status == 'expelled' ? 'table__row_grey' : row.id == userStore.user.id ? 'table__row_blue' : ''">
            <TableItem 
                v-for="item in tableKeys" 
                :class="[
                    item.type == 'mark' ? 'table__item_center' : '',
                    row[item.key].debt ? 'table__item_red' : '',
                    row[item.key].status == '3' ? 'table__item-remark_red' : row[item.key].status == '2' ? 'table__item-remark_yellow' : '',
                ]" 
                :style="`--default-width: ${item.width}`"
            >
                {{ item.type == 'mark' ? row[item.key].mark : row[item.key]}}
            </TableItem>
        </TableRow>
    </TableBody>
</template>

<script setup>
    import './StudentJournalTableBody.scss';

    import TableBody from '~/components/AppTable/TableBody/TableBody.vue'
    import TableRow from '~/components/AppTable/TableRow/TableRow.vue'
    import TableItem from '~/components/AppTable/TableItem/TableItem.vue'

    import { useJournalStore } from '@/stores/journalStore.js'
    import { useUserStore } from '@/stores/userStore.js'
    const userStore = useUserStore()
    const journalStore = useJournalStore()

    const tableKeys = computed(() => {
        return journalStore.journalTableKeys.filter(p => p.subject == journalStore.activeSubject)[0].data.sort((prev, next) => prev.sort - next.sort)
    })
</script>
