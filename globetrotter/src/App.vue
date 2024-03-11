<template>
  <navbar :name="name" :age="age"/>

  <input type="text" v-model="name">
  <input type="text" v-model="age">
</template>

<script setup>
import navbar from '@/components/navbar.vue'
//Ref rend la variable réactive
import { ref } from 'vue';
const name = ref('thais');
const age = ref(21);

const display = () =>{
  console.log(name)
}
display()
</script>

<style scoped>
</style>
