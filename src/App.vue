<script setup>
import NavBar from './components/NavBar.vue'
import Cloud from './components/Cloud.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header class="pt-[10vh] h-dvh relative">
    <NavBar />
    <Cloud />
  </header>

  <main class="relative">

    <!-- Qui Sommes Nous ? -->
    <div id="who" class="bg-[url('./assets/bg-1.png')] bg-cover h-dvh relative z-0">
      <img src="./assets/fog.svg" alt="" class="absolute w-full z-10 transform animate-scale-fog-2 md:animate-scale-fog-1">
      <div class="bg-opacity-0 min-h-max h-[15vh] w-full flex justify-center items-end"></div>
      <div class="h-[70vh] sticky bottom-0 shadow-2xl">
        <div class="flex justify-center w-screen items-end h-[10vh]">
          <h2 class="text-white title bg-scss-1 w-fit px-16 md:px-28 rounded-t-lg text-center">Qui Sommes Nous ?</h2>
        </div>
        <div class="bg-scss-1 h-[60vh] flex flex-col justify-evenly items-center">
          <hr class="w-1/3 h-1 bg-sky-600 border-none rounded-lg">
          <p class="w-2/3 text-justify text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <hr class="w-1/3 h-1 bg-sky-600 border-none rounded-lg">
        </div>
      </div>
      <div class="bg-opacity-0 h-[15vh]"></div>
      <img src="./assets/fog.svg" alt="" class="fog-animation absolute w-full z-10 animate-scale-fog-2 md:animate-scale-fog-1">
    </div>

    <!-- Applications -->
    <div class="min-h-dvh flex flex-col justify-center items-center gap-8">
      <div class="pt-[15vh]"></div>
      <div class="w-screen flex flex-row justify-center items-center flex-wrap">
        <div class="flex flex-col w-1/2 gap-4 md:w-1/5">
          <h2 class="text-white text-3xl">Nos services configurables</h2>
          <p class="text-[#b6b6b6] text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
        </div>
        <img src="./assets/Hopa-3.png" alt="" class="h-[50vh]">
      </div>
      <hr class="w-1/3 h-1 bg-[#505050] border-none rounded-lg">
      <div class="w-screen flex justify-center items-center flex-wrap flex-col-reverse md:flex-row gap-x-8">
        <img src="./assets/Hopa-2.png" alt="" class="h-[50vh]">
        <div class="flex flex-col w-1/2 gap-4 md:w-1/5">
          <h2 class="text-white text-3xl">Nos services configurables</h2>
          <p class="text-[#b6b6b6] text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
        </div>
      </div>
      <hr class="w-1/3 h-1 bg-[#505050] border-none rounded-lg">
      <div class="w-screen flex flex-row justify-center items-center flex-wrap">
        <div class="flex flex-col w-1/2 gap-4 md:w-1/5">
          <h2 class="text-white text-3xl">Nos services configurables</h2>
          <p class="text-[#b6b6b6] text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</p>
        </div>
        <img src="./assets/Hopa-1.png" alt="" class="h-[50vh]">
      </div>
    </div>

  </main>

  <Footer />
</template>

<style lang="scss">
  @import './assets/style.scss';
</style>
