<template>
    <NuxtLink class="link" :to="props.link.link">
        {{ props.link.title }}
    </NuxtLink>
</template>

<script setup>
    import './AppLink.scss';

    const props = defineProps({
        link: {
            default: {
                title: "Undefined title",
                link: '/'
            },
            type: Object
        }
    })
</script>
