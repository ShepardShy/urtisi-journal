<template>
    <TableHeader>
        <TableRow>
            <th class="table__item" v-for="item in EducatorScheduleTableKeys" :title="item.theme" :style="`--default-width: ${item.width}`">
                {{ item.title }}
            </th>
        </TableRow>
    </TableHeader>
</template>

<script setup>
    import TableHeader from '~/components/AppTable/TableHeader/TableHeader.vue'
    import TableRow from '~/components/AppTable/TableRow/TableRow.vue'
    import EducatorScheduleTableKeys from '../EducatorScheduleTableKeys.json'
</script>
