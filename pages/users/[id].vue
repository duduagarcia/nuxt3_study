<script setup>
const route = useRoute();

console.log(route.params);
</script>

<template>
  <div>
    <h1>Hello user {{ route.params.id }}</h1>
  </div>
</template>
