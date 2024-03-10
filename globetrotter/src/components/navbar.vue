<template>
  <div class="top-bar">
    <div class="top-bar-left">
      <ul class="dropdown menu" data-dropdown-menu>
        <li class="menu-text">Site Title</li>
        <li>
          <a href="#">{{ props.subTitle }}</a>
        </li>
        <li><a href="#">Two</a></li>
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
  {{ props.subTitle }}
</template>

<script setup>
const props = defineProps(['subTitle']);
</script>