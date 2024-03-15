<script setup>
import NavBar from './components/NavBar.vue'
import Cloud from './components/Cloud.vue'
</script>

<template>
  <header class="pt-[10vh] h-dvh relative z-10">
    <NavBar />
    <Cloud />
  </header>

  <main class="relative">

    <!-- Qui Sommes Nous ? -->
    <div id="who" class="bg-[url('./assets/bg-1.png')] bg-cover h-dvh relative z-0">
      <div class="bg-opacity-0 min-h-max h-[30vh] w-full flex justify-center items-center">
        <h2 class="text-white title">Qui Sommes Nous ?</h2>
      </div>
      <div class="bg-scss-1 h-[60vh] sticky bottom-0 shadow-2xl flex flex-col justify-evenly items-center">
        <hr class="w-1/3 h-1 bg-sky-600 border-none rounded-lg">
        <p class="w-2/3 text-justify text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        <hr class="w-1/3 h-1 bg-sky-600 border-none rounded-lg">
      </div>
      <div class="bg-opacity-0 h-[10vh]"></div>
    </div>

  </main>
</template>

<style lang="scss">
  @import './assets/style.scss';
</style>
