<template>
    <FormItem class="form__item_datepicker">
        <label :for="`${props.item.typeComponent}_${props.item.id}`"> 
            {{ props.item.title }} 
        </label>
        <VueDatePicker
            :id="`${props.item.typeComponent}_${props.item.id}`" 
            locale="ru"
            auto-apply
            hide-offset-dates
            format="dd.MM.yyyy"
            placeholder="__.__.____"
            v-model="localItem.value"
            :enable-time-picker="false" 
            :max-time="{ hours: 0, minutes: 0, seconds: 0 }"
            @update:modelValue="(e) => {
                selectDate({id: props.item.id, key: props.item.type, value: e})
                localItem.date = e
            }" 
        />
    </FormItem>
</template>

<script setup>
    import './AppDatapicker.scss';
    import { onMounted, ref } from 'vue';

    import FormItem from '../AppForm/FormItem/FormItem.vue';

    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'

    // Локальная переменная для взаимодействия с v-model
    let localItem = ref({})

    // Установка даты для отправки на сервер
    const selectDate = (data) => {
        let date = new Date(data.value)
        data.value = `${date.toLocaleString().split(',')[0].split('.').reverse().join('-')}`
        emit('changeValue', data)
    }

    const props = defineProps({
        item: {
            default: {
                id: 0,
                value: '',
                type: "date",
                objectTitle: '',
                placeholder: '',
                typeComponent: 'input',
                title: "Undefined title"
            },
            type: Object
        }
    })

    const emit = defineEmits([
        'selectDate'
    ])

    onMounted(() => {
        localItem.value = props.item
        localItem.value.value = props.item.value.split('.').reverse().join('-')
    })
</script> 