<template>
    <TableHeader>
        <TableRow>
            <th class="table__item" v-for="item in StudentScheduleTableKeys" :style="`--default-width: ${item.width}`">
                {{ item.title }}
            </th>
        </TableRow>
    </TableHeader>
</template>

<script setup>
    import TableHeader from '~/components/AppTable/TableHeader/TableHeader.vue'
    import TableRow from '~/components/AppTable/TableRow/TableRow.vue'
    import StudentScheduleTableKeys from '../StudentScheduleTableKeys.json'
</script>
