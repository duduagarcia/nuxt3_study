<script setup>
useSeoMeta({
  title: "Meet Nuxt",
  description: "The Intuitive Vue Framework",
});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
