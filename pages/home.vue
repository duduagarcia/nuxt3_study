<script setup>
const testeStore = useTesteStore();
const { count } = storeToRefs(testeStore);
const { decrement } = testeStore;

console.log(count.value);
</script>

<template>
  <main>
    <Head>
      <Title>Dudu</Title>
    </Head>
    <h1>Home</h1>
    <p>{{ count }}</p>
    <button @click="decrement">decrementar var do pinia</button>
    <br />
    <NuxtLink to="/">index</NuxtLink>
    <br /><br />
  </main>
</template>
