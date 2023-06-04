<template>
    <div class="page journal">
        <div class="journal__header">
            <AppH1>
                Журнал посещения и успеваемости
            </AppH1>

            <AppSelect
                    class="journal__select"
                    @changeValue="(data) => changeValue(data)"
                    :item="{
                        id: 0,
                        title: 'Предмет',
                        typeComponent: 'select',
                        objectTitle: 'activeSubject',
                        disabled: false,
                        value: journalStore.activeSubject,
                        options: [
                            {
                                id: 0,
                                title: 'Безопасность жизнедеятельности',
                                value: 'bjd'
                            },
                            {
                                id: 1,
                                title: 'Математика',
                                value: 'mathematic'
                            },
                            {
                                id: 2,
                                title: 'Физическая культура',
                                value: 'fizra'
                            },
                            {
                                id: 3,
                                title: 'Русский язык',
                                value: 'russian'
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

    import { useJournalStore } from '@/stores/journalStore.js'
    const journalStore = useJournalStore()

    const changeValue = (data) => {
        switch (data.key) {
            case 'activeGroup':
                journalStore.activeGroup = data.value
                break;
            case 'activeSubject':
                journalStore.activeSubject = data.value
            break;
            default:
                break;
        }
        journalStore.journal.filter(p => (p.group == journalStore.activeGroup) && (p.subject == journalStore.activeSubject)).forEach(element => {
            setTotalMark(element)
        }) 
    }


    const setTotalMark = (student) => {
        let totalMark = 0
        let markCount = 0
        for (let key in student) {
            if (key != 'id' && key != 'student' && key != 'total' && key != 'status' && key != 'group' && key != 'subject' && key != 'order') {
                if (student[key].mark != '.') {
                    totalMark += student[key].mark == '.' ?  0 : Number(student[key].mark)
                    markCount++
                }
            }
            student.total.mark = totalMark == 0 && markCount == 0 ? 0 : totalMark / markCount
        }
    }

    onMounted(() => {
        journalStore.journal.filter(p => (p.group == journalStore.activeGroup) && (p.subject == journalStore.activeSubject)).forEach(element => {
            setTotalMark(element)
        }) 
    })

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
