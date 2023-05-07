<template>
    <div class="user__info">
        <div class="user__info-item">
            <div class="user__info-title"> Курс: </div>
            <div class="user__info-value"> {{ userStore.user.course }} </div>
        </div>
        <div class="user__info-item">
            <div class="user__info-title"> Группа: </div>
            <div class="user__info-value"> {{ userStore.user.group }} </div>
        </div>
        <div class="user__info-item">
            <div class="user__info-title"> Кафедра: </div>
            <div class="user__info-value"> {{ userStore.user.department }} </div>
        </div>
    </div>
</template>

<script setup>
    import './UserInfo.scss';

    import { useUserStore } from '@/stores/userStore.js'
    const userStore = useUserStore()
</script>