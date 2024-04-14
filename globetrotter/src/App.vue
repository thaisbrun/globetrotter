<template>
<navbar 
@update-name="name => display(name)"
/>
</template>

<script setup>
import navbar from '@/components/navbar.vue'

const display = (name) => {
  console.log('App.vue : ' + name)
}
</script>

<style scoped>

.text-green{
  color:green;
}
</style>
