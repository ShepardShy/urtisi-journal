<template>
    <div class="legend">
        <div class="legend__content">
            <div class="legend__title">
                Легенда
            </div>
            <ul class="legend__list">
                <li class="legend__item" v-for="item in props.legend" :style="`--legend-color: ${item.color}`">
                    {{ item.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import './AppLegend.scss';
    
    const props = defineProps({
        legend: {
            default: [
                {
                    id: 0,
                    title: "Undefined title",
                    color: "#FF0000"
                }
            ],
            type: Array
        }
    })
</script>
