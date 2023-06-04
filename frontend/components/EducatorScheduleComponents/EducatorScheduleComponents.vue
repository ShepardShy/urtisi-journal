<template>
    <div class="page journal">
        <div class="journal__header">
            <AppH1>
                Расписание
            </AppH1>

        </div>
            
        <AppSection class="journal__section">
            <EducatorScheduleTable />
                <AppLegend 
                    :legend="legend"
                />
        </AppSection>
    </div>
</template>

<script setup>
    import './EducatorScheduleComponents.scss'
    import EducatorScheduleTable from './EducatorScheduleTable/EducatorScheduleTable.vue'
    import AppLegend from '@/components/AppLegend/AppLegend.vue';

    let legend = [
        {
            id: 0,
            title: "Лекция",
            color: "#12D649"
        },
        {
            id: 0,
            title: "Лабораторная работа / Практика",
            color: "#FFB800"
        },
        {
            id: 0,
            title: "Зачет / Экзамен",
            color: "#FF0000"
        }
    ]
</script>