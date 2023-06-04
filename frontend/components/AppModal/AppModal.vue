<template>
    <div class="modal">
        <div class="modal__background" @click="() => $emit('toggleModal', false)"></div>
        <div class="modal__content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
    import './AppModal.scss';
    
</script>
