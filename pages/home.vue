<script setup>
const testeStore = useTesteStore();
const { count } = storeToRefs(testeStore);
const { decrement } = testeStore;

console.log(count.value);

const id = ref(0);
</script>

<template>
  <main>
    <Head>
      <Title>Dudu</Title>
    </Head>
    <h1>Home</h1>
    <p>{{ count }}</p>
    <button @click="decrement">decrementar var do pinia</button>
    <br /><br />
    <input type="number" v-model="id" />
    <br />
    <p>{{ id }}</p>
    <br /><br />
    <NuxtLink :to="'users/' + id">Users</NuxtLink>
    <br /><br />
  </main>
</template>
