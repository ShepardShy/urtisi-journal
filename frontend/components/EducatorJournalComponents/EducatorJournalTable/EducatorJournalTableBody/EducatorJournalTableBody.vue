<template>
    <TableBody>
        <TableRow v-for="row in journalStore.journal.filter(p => (p.group == journalStore.activeGroup) && (p.subject == journalStore.activeSubject))" :class="row.status == 'expelled' ? 'table__row_grey' : row.id == userStore.user.id ? 'table__row_blue' : ''">
            <TableItem 
                v-for="item in tableKeys" 
                :class="[
                    item.type == 'mark' ? 'table__item_center' : '',
                    row[item.key].status == '3' ? 'table__item-remark_red' : row[item.key].status == '2' ? 'table__item-remark_yellow' : '',
                    row[item.key].debt ? 'table__item_red' : '',
                ]" 
                :style="`--default-width: ${item.width}`"
                @click="() => doubleClick(row, item)"
                >
                {{ item.type == 'mark' ? row[item.key].mark : row[item.key]}}
            </TableItem>
        </TableRow>
    </TableBody>
</template>

<script setup>
    import './EducatorJournalTableBody.scss';

    import TableBody from '~/components/AppTable/TableBody/TableBody.vue'
    import TableRow from '~/components/AppTable/TableRow/TableRow.vue'
    import TableItem from '~/components/AppTable/TableItem/TableItem.vue'

    
    import { useJournalStore } from '@/stores/journalStore.js'
    import { useUserStore } from '@/stores/userStore.js'
    const userStore = useUserStore()
    const journalStore = useJournalStore()
    
    let clickSetting = ref({
        id: -1,
        delay: 500,
        clicks: 0,
        timer: null
    })

    const tableKeys = computed(() => {
        return journalStore.journalTableKeys.filter(p => p.subject == journalStore.activeSubject)[0].data.sort((prev, next) => prev.sort - next.sort)
    })

    // Симуляция двойного клика
    const doubleClick = (row, item) => {
        clickSetting.value.clicks++;
        if (clickSetting.value.clicks === 1) {
            clickSetting.value.timer = setTimeout( () => {
            clickSetting.value.clicks = 0
            }, clickSetting.value.delay);
        } else {
            editStudentMark(row, item)
            clearTimeout(clickSetting.value.timer);  
            clickSetting.value.clicks = 0;
        }   
        clickSetting.value.id = item.id
    }  

    const emit = defineEmits([
        'changeMark'
    ])

    const editStudentMark = (row, item) => {
        if (item.type == 'mark' && item.key != 'total') {
            emit('changeMark', {item: row, key: item.key})
        } else {
            return
        }
    }
</script>
