<template>
    <TableBody>
        <TableRow v-for="row in userStore.user.debt">
            <TableItem v-for="item in UserTableKeys">
                {{ row[item.key] }}
            </TableItem>
        </TableRow>
    </TableBody>
</template>

<script setup>
    import './UserTableBody.scss';
    
    import UserTableKeys from '../UserTableKeys.json'
    import TableBody from '~/components/AppTable/TableBody/TableBody.vue'
    import TableRow from '~/components/AppTable/TableRow/TableRow.vue'
    import TableItem from '~/components/AppTable/TableItem/TableItem.vue'

    import { useUserStore } from '@/stores/userStore.js'
    const userStore = useUserStore()
</script>
