<template>
    <figure class='ibg'>
        <img :src='props.img.src' :alt='props.img.alt'>
    </figure>
</template>

<script setup>
    import './AppImage.scss';
    
    const props = defineProps({
        img: {
            default: {
                src: '/',
                alt: ''
            },
            type: Object
        }
    })
</script>
