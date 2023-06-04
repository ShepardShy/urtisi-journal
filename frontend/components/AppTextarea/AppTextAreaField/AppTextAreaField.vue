<template>
    <textarea
        :value="props.item.value"
        class="form__item_textarea"
        :placeholder="props.item.placeholder"
        :id="`${props.item.typeComponent}_${props.item.id}`" 
        @input="(e) => $emit('changeValue', {key: props.item.objectTitle, value: e.target.value, element: e})"
    >
    </textarea>
</template>

<script setup>
    import './AppTextAreaField.scss';
    
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
</script>
