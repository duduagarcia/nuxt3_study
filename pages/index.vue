<script setup>
const testeStore = useTesteStore();
const { count } = storeToRefs(testeStore);
const { increment } = testeStore;

const respose = await $fetch("/api/hello");

console.log(respose);

console.log(count.value);
</script>

<template>
  <main>
    <h1>index</h1>
    <p>{{ count }}</p>
    <button @click="increment">Incrementar var do pinia</button>
    <NuxtLink to="/home">home</NuxtLink>
  </main>
</template>
