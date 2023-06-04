<template>
    <AppModal @toggleModal="$emit('toggleModal', true)">
        <div class="modal__title">
            Добавить запись
        </div>

        <div class="modal__body">
            <AppDatapicker :item="newRecord.date"/>
            <AppInput 
                :item="newRecord.input"
                @changeValue="(data) => changeValue({item: newRecord.input, value: data.value})"
            />
            <EducatorModalList 
                :list="newRecord.students"
                @changeValue="(data) => changeValue(data)"
            />
        </div>

        <AppButton class="button_blue" @click="() => createNewTheme(newRecord)">
            Сохранить
        </AppButton>
        <AppButton @click="() => $emit('toggleModal', true)">
            Отмена
        </AppButton>
    </AppModal>
</template>

<script setup>
    import './EducatorModal.scss';

    import AppModal from '~/components/AppModal/AppModal.vue';
    import AppDatapicker from '~/components/AppDatapicker/AppDatapicker.vue'
    import AppInput from '~/components/AppInput/AppInput.vue';
    import AppButton from '~/components/AppButton/AppButton.vue';
    import EducatorModalList from './EducatorModalList/EducatorModalList.vue';

    import { useJournalStore } from '@/stores/journalStore.js'
    const journalStore = useJournalStore()

    let newRecord = ref({
        input: {
            id: 0,
            value: '',
            type: "text",
            objectTitle: '',
            placeholder: '',
            typeComponent: 'input',
            title: "Тема",
        },
        date: {
            id: 0,
            value: '',
            type: "date",
            objectTitle: '',
            placeholder: '',
            typeComponent: 'input',
            title: "Дата"
        },
        students: []
    })

    const emit = defineEmits([
        'toggleModal'
    ])

    // Локальный вывод данных в консоль
    const createNewTheme = (data) => {
        let date = new Date(data.date.date)
        date = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${date.getMonth()+1 < 10 ? '0' + (Number(date.getMonth())+1) : date.getMonth()+1}`

        newRecord.value.students.forEach(student => {
            journalStore.journal.filter(p => (p.group == journalStore.activeGroup) && (p.subject == journalStore.activeSubject)).forEach(element => {
                if (element.id == student.id) {
                    element[date] = {
                        status: student.value,
                        mark: '.',
                        debt: false
                    }
                    setTotalMark(element)
                }
            });
        });
        journalStore.journalTableKeys.filter(p => p.subject == journalStore.activeSubject)[0].data.push(
            {
                "id": 0,
                "title": date,
                "key": date,
                "type": "mark",
                "width": "100px",
                "theme": newRecord.value.input.value,
                "sort": journalStore.journalTableKeys.length
            }
        )
        emit('toggleModal', true)
    }

    const changeValue = (data) => {
        data.item.value = data.value 
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
        journalStore.journal.filter(p => (p.group == journalStore.activeGroup) && (p.subject == journalStore.activeSubject)).forEach((element, index) => {
            newRecord.value.students.push({
                id: element.id,
                value: '',
                title: element.student,
                status: element.status
            })
        });
    })
</script>
