<template>
    <label :for="`${props.item.typeComponent}_${props.item.id}`"> 
        {{ props.item.title }} 
    </label>
</template>

<script setup>
    import './AppTextAreaLabel.scss';
    
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
