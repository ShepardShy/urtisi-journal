<template>
    <FormItem >
        <AppTextAreaLabel 
            :item="props.item"
        />
        <AppTextAreaField 
            :item="props.item"
            @changeValue="(data) => changeValue(data)"
        />
    </FormItem>
</template>

<script setup>
    import './AppTextArea.scss';

    import { onMounted } from 'vue';
    
    import AppTextAreaLabel from './AppTextAreaLabel/AppTextAreaLabel.vue';
    import AppTextAreaField from './AppTextAreaField/AppTextAreaField.vue';
    import FormItem from '../AppForm/FormItem/FormItem.vue';

    const props = defineProps({
        item: {
            default: {
                id: 0,
                value: '',
                type: "text",
                objectTitle: '',
                placeholder: '',
                typeComponent: 'input',
                title: "Undefined title",
            },
            type: Object
        }
    })

    const emit = defineEmits([
        'changeValue'
    ])

    onMounted(() => {
        document.querySelectorAll('.form__item_textarea').forEach(element => {
            textAreaAdjust(element)
        });
    })

    // Изменение значения
    const changeValue = (data) => {
        emit('changeValue', {
            key: data.key,
            value: data.value
        })
        textAreaAdjust(data.element.target)
    }

    // Изменение размера textarea
    const textAreaAdjust = (element) => {
        if (element.scrollHeight == 39) return
        element.style.height = "1px";
        element.style.height = (element.scrollHeight)+"px";
    }
</script>
