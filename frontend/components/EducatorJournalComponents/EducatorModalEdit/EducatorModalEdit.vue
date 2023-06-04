<template>
    <AppModal @toggleModal="$emit('toggleModal', true)">
        <div class="modal__title_edit">
            <div class="modal__title-h1">
                Редактирование
            </div>
            <div class="modal__title-h2">
                {{ props.student.student }}
            </div>
        </div>

        <div class="modal__body">
            <AppSelect 
                :item="{
                    id: 0,
                    title: 'Оценка',
                    typeComponent: 'select',
                    objectTitle: 'mark',
                    disabled: false,
                    value: props.student[props.selectedStudentKey].mark,
                    options: optionsMark
                }"
                @changeValue="(data) => changeValue(data)"
            />

            <AppSelect 
                :item="{
                    id: 0,
                    title: 'Статус',
                    typeComponent: 'select',
                    objectTitle: 'status',
                    value: props.student[props.selectedStudentKey].status,
                    options: optionsStatus
                }"
                @changeValue="(data) => changeValue(data)"
            />

            <AppSelect 
                :item="{
                    id: 0,
                    title: 'Задолженность',
                    typeComponent: 'select',
                    objectTitle: 'debt',
                    value: props.student[props.selectedStudentKey].debt,
                    options: optionDebt
                }"
                @changeValue="(data) => changeValue({key: data.key, value: data.value})"
            />
        </div>

        <AppButton class="button_blue" @click="() => $emit('saveEditStudent', {student: props.student, key: props.selectedStudentKey, data: localEditItem})">
            Сохранить
        </AppButton>
        <AppButton @click="() => $emit('toggleModal', true)">
            Отмена
        </AppButton>
    </AppModal>
</template>

<script setup>
    import './EducatorModalEdit.scss';

    import AppModal from '~/components/AppModal/AppModal.vue';
    import AppSelect from '~/components/AppSelect/AppSelect.vue';
    import AppButton from '~/components/AppButton/AppButton.vue';

    let localEditItem = ref(null)

    const changeValue = (data) => {
        localEditItem.value[data.key] = data.value
    }

    const props = defineProps({
        student: {
            default: {
                "id": 0,
                "order": 1,
                "student": "Иванов Иван Иванович",
                "02.12": {
                    "status": "2",
                    "mark": ".",
                    "debt": false
                },
                "total": {
                    "status": "",
                    "mark": ""
                },
                "group": 982,
                "subject": "bjd",
                "status": "study"
            },
            type: Object
        },
        selectedStudentKey: {
            default: "02.12",
            type: String
        }
    })

    let optionsStatus = [
            {
                id: 1,
                value: '1',
                title: 'Присутствует'
            },
            {
                id: 2,
                value: '2',
                title: 'Опоздал'
            },
            {
                id: 3,
                value: '3',
                title: 'Прогул'
            }
    ]

    let optionsMark = [
            {
                id: 0,
                value: '.',
                title: 'Нет оценки'
            },
            {
                id: 1,
                value: '2',
                title: '2'
            },
            {
                id: 2,
                value: '3',
                title: '3'
            },
            {
                id: 3,
                value: '4',
                title: '4'
            },
            {
                id: 3,
                value: '5',
                title: '5'
            }
    ]
    
    let optionDebt = [
        {
            id: 0,
            value: 'true',
            title: 'Задолженность'
        },
        {
            id: 1,
            value: 'false',
            title: 'Нет'
        },
    ]

    onMounted(() => {
        localEditItem.value = Object.assign({}, props.student[props.selectedStudentKey])
    })
</script>
