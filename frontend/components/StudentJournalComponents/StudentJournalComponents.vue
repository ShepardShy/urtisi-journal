<template>
    <div class="page journal">
        <div class="journal__header">
            <AppH1>
                Журнал посещения и успеваемости
            </AppH1>

            <AppSelect
                class="journal__select"
                :item="{
                    id: 0,
                    title: 'Предмет',
                    typeComponent: 'select',
                    objectTitle: '',
                    disabled: false,
                    value: '',
                    options: [
                        {
                            id: 0,
                            value: 'Компьютерные сети'
                        },
                        {
                            id: 1,
                            value: 'Предмет 2'
                        },
                        {
                            id: 2,
                            value: 'Предмет 3'
                        },
                        {
                            id: 3,
                            value: 'Предмет 4'
                        },
                        {
                            id: 4,
                            value: 'Предмет 5'
                        }
                    ]
                }"
            />
        </div>
            
        <AppSection class="journal__section">
            <StudentJournalTable />
                <AppLegend 
                    :legend="legend"
                />
        </AppSection>
    </div>
</template>

<script setup>
    import './StudentJournalComponents.scss';
    
    import AppSelect from '@/components/AppSelect/AppSelect.vue'
    import StudentJournalTable from './StudentJournalTable/StudentJournalTable.vue';
    import AppLegend from '../AppLegend/AppLegend.vue';

    let legend = [
        {
            id: 0,
            title: "Вы",
            color: "#D4E2FE"
        },
        {
            id: 0,
            title: "Прогул",
            color: "#FF0000"
        },
        {
            id: 0,
            title: "Опоздал",
            color: "#FFB800"
        },
        
        {
            id: 0,
            title: "Отчислен",
            color: "rgba(100, 100, 100, 0.22)"
        },
        {
            id: 0,
            title: "Задолженность",
            color: "rgba(255, 12, 12, 0.35);"
        }
    ]
</script>
