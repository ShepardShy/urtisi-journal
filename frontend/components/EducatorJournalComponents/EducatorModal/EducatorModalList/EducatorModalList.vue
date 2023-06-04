<template>
    <div class="modal__list educator-journal__modal-list">
        <div class="modal__title">
            Студенты
        </div>

        <div class="modal__items">
            <div class="modal__item" v-for="item in props.list.filter(p => p.status == 'study')">
                <span> {{ item.title }} </span>
                <AppSelect 
                    class="modal__select"
                    :item="{
                        id: 0,
                        title: '',
                        typeComponent: 'select',
                        objectTitle: '',
                        disabled: false,
                        value: item.value,
                        options: options
                    }"
                    @changeValue="(data) => $emit('changeValue', {item: item, value: data.value})"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import './EducatorModalList.scss';
    
    import AppSelect from '~/components/AppSelect/AppSelect.vue';

    let options = [
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

    const props = defineProps({
        list: {
            default: [{
                id: 0,
                value: '',
                title: '',
                status: ''
            }],
            type: Array
        }
    })
</script>
