<template>
    <TableHeader>
        <TableRow>
            <th class="table__item" v-for="item in UserTableKeys">
                {{ item.title }}
            </th>
        </TableRow>
    </TableHeader>
</template>

<script setup>
    import './UserTableHeader.scss';
    
    import TableHeader from '~/components/AppTable/TableHeader/TableHeader.vue'
    import TableRow from '~/components/AppTable/TableRow/TableRow.vue'

    import UserTableKeys from '../UserTableKeys.json'
</script>
