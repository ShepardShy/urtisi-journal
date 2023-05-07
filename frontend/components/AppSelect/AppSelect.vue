<template>
    <FormItem>
        <label :for="`${props.item.typeComponent}_${props.item.id}`"> 
            {{ props.item.title }} 
        </label>
        <select :disabled="props.item.disabled" :value="props.item.value" :id="`${props.item.typeComponent}_${props.item.id}`" @change="(e) => this.$emit('changeValue', {key: props.item.objectTitle, value: e.target.value})">
            <option v-for="(option, i) in props.item.options" :value="option.id" :selected="i == 0">
                {{ option.value }}
            </option>
        </select>
    </FormItem>
</template>

<script setup>
    import './AppSelect.scss';

    import FormItem from '@/components/AppForm/FormItem/FormItem.vue'

    const props = defineProps({
        item: {
            default: {
                id: 0,
                title: 'Undefined title',
                typeComponent: 'select',
                objectTitle: '',
                disabled: false,
                value: '',
                options: [
                    {
                        id: 0,
                        value: 'Undefined'
                    }
                ]
            },
            type: Object
        }
    })
</script>
