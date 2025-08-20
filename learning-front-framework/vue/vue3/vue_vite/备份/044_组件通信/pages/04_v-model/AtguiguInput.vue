<template>
    <input 
        type="text" 
        :value="modelValue" 
        @input="emit('update:modeValue',(<HTMLInputElement>$event.target).value)"
    >
</template>

<script setup lang="ts" name="AtguiguInput">
    defineProps(['modelValue'])
    const emit = defineEmits(['update:modeValue'])
</script>

<style scoped>
    input{
        border:2px solid;
        background-image: linear-gradient(45deg,red,yellow,green);
        height: 30px;
        font-size: 20px;
    }

</style>