<template>

  <div :class="{'text-green': user.age > 20}">
    <h1> {{ user.name }} </h1>
  </div>
</template>

<script setup>
import navbar from '@/components/navbar.vue'
//Ref rend la variable réactive
import { reactive } from 'vue';

const user = reactive({
  name: 'thais',
  age: 21,
});
</script>

<style scoped>

.text-green{
  color:green;
}
</style>
