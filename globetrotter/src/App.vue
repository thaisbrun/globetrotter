<template>

</template>

<script setup>
import navbar from '@/components/navbar.vue'
//Ref rend la variable réactive
import {watch, ref} from 'vue';

const name = ref('Thaïs');
const age = ref(21);
watch(name, (newValue, oldValue) =>{
  console.log(newValue, oldValue);
})
</script>

<style scoped>

.text-green{
  color:green;
}
</style>
