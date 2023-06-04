<template>
    <div class="page journal journal-educator">
        <div class="journal__header">
            <AppH1>
                Журнал посещения и успеваемости
            </AppH1>

            <div class="journal__header-actions">
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
                <AppSelect
                    class="journal__select"
                    @changeValue="(data) => changeValue(data)"
                    :item="{
                        id: 0,
                        title: 'Группа',
                        typeComponent: 'select',
                        objectTitle: 'activeGroup',
                        disabled: false,
                        value: journalStore.activeGroup,
                        options: [
                            {
                                id: 0,
                                title: '981',
                                value: '981'
                            },
                            {
                                id: 1,
                                title: '982',
                                value: '982'
                            }
                        ]
                    }"
                />
                <AppButton class="button_blue" @click="() => toggleModal('create')">
                    Добавить запись
                </AppButton>
            </div>

        </div>
            
        <AppSection class="journal__section journal__section_educator">
            <EducatorJournalTable 
                @changeMark="(data) => changeMark(data)"
            />
                <AppLegend 
                    :legend="legend"
                />
        </AppSection>
    </div>

    <EducatorModal 
        v-if="activeModalCreate"
        @toggleModal="() => toggleModal('create')"
    />

    <EducatorModalEdit 
        v-if="activeModalEdit"
        :student="selectedStudent"
        :selectedStudentKey="selectedStudentKey"
        @saveEditStudent="(data) => saveEditStudent(data)"
        @toggleModal="() => toggleModal('edit')"
    />
</template>

<script setup>
    import './EducatorJournalComponents.scss';
    
    import AppSelect from '@/components/AppSelect/AppSelect.vue'
    import EducatorJournalTable from './EducatorJournalTable/EducatorJournalTable.vue';
    import AppLegend from '../AppLegend/AppLegend.vue';
    import AppButton from '../AppButton/AppButton.vue';
    import EducatorModal from './EducatorModal/EducatorModal.vue';
    import EducatorModalEdit from './EducatorModalEdit/EducatorModalEdit.vue';

    import { useJournalStore } from '@/stores/journalStore.js'
    const journalStore = useJournalStore()

    let activeModalCreate = ref(false)
    let activeModalEdit = ref(false)

    let selectedStudent = ref(null)
    let selectedStudentKey = ref("")


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

    const saveEditStudent = (data) => {
        journalStore.journal.filter(p => (p.group == journalStore.activeGroup) && (p.subject == journalStore.activeSubject)).forEach(element => {
            if (element.id == data.student.id) {
                element[data.key] = data.data
                element[data.key].debt = data.data.debt == 'false' || data.data.debt == false ? false : true
                setTotalMark(element)
            }
        }) 
        activeModalEdit.value = false
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

    // Показ/Скрытие модального окна
    const toggleModal = (key) => {
        switch (key) {
            case 'create':
                activeModalCreate.value = !activeModalCreate.value
                break;
            case 'edit':
                activeModalEdit.value = !activeModalEdit.value
                break;
            default:
                break;
        }
    }

    const changeMark = (data) => {
        activeModalEdit.value = true
        selectedStudent.value = data.item
        selectedStudentKey.value = data.key
    }

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

    onMounted(() => {
        journalStore.journal.filter(p => (p.group == journalStore.activeGroup) && (p.subject == journalStore.activeSubject)).forEach(element => {
            setTotalMark(element)
        }) 
    })
</script>
