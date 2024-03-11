<template>
  <div class="top-bar">
    <div class="top-bar-left">
      <ul class="dropdown menu" data-dropdown-menu>
        <li class="menu-text">Site Title</li>
        <li>
          <a href="#">{{ props.name }}</a>
        </li>
        <li><a href="#">{{ props.age }}</a></li>
        <li><a href="#">Three</a></li>
      </ul>
    </div>
    <div class="top-bar-right">
      <ul class="menu">
        <li><input type="search" placeholder="Search"></li>
        <li><button type="button" class="button">Search</button></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['name','age']);
</script>