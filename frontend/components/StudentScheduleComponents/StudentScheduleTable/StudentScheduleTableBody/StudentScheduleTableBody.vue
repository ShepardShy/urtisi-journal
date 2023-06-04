<template>
    <TableBody>
        <TableRow v-for="row in sheaduleStore.sheadule" :class="row.day == date ? 'table__row_blue' : ''">
            <TableItem 
                v-for="item in StudentScheduleTableKeys" 
                :style="`--default-width: ${item.width}`"
            >
                <div class="table__item_sheadule" 
                    v-if="item.type == 'lesson'"
                    :class="row[item.key] != null ? row[item.key].status == 'test' ? 'table__item-remark_red' : row[item.key].status == 'lab' ? 'table__item-remark_yellow' : 'table__item-remark_green' : ''" 
                >
                    <span class="table__item_group"> {{ row[item.key] == null ? '' : row[item.key].group }} </span>
                    <span class="table__item_office"> {{ row[item.key] == null ? '' : row[item.key].office }} </span>
                    <span class="table__item_title" :class="row[item.key] == null ? 'table__item_stroke' : ''"> {{ row[item.key] == null ? '–' : row[item.key].title }} </span>
                </div>

                <span v-else class="table__item_center">
                    {{ row[item.key] }}
                </span>
                
            </TableItem>
        </TableRow>
    </TableBody>
</template>

<script setup>
    import './StudentScheduleTableBody.scss';

    import TableBody from '~/components/AppTable/TableBody/TableBody.vue'
    import TableRow from '~/components/AppTable/TableRow/TableRow.vue'
    import TableItem from '~/components/AppTable/TableItem/TableItem.vue'

    import StudentScheduleTableKeys from '../StudentScheduleTableKeys.json'
    import { useSheaduleStore } from '@/stores/sheaduleStore.js'
    import { useUserStore } from '@/stores/userStore.js'
    const userStore = useUserStore()
    const sheaduleStore = useSheaduleStore()
    

    let date = ref(new Date())
    date.value = `${date.value.getDate() < 10 ? '0' + date.value.getDate() : date.value.getDate()}.${date.value.getMonth()+1 < 10 ? '0' + (Number(date.value.getMonth())+1) : date.value.getMonth()+1}`

</script>
