<template>
  <h1>Hello</h1></template>
{{name }}
<input type="text" v-model="name" @input="handleUpdate">
<script setup>
import {ref} from 'vue';
const emit = defineEmits(['updateName'])
const name = ref('');

const handleUpdate = (event) => {
  console.log(event.target.value)
}
</script>