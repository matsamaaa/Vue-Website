<script setup>
import NavBar from './components/NavBar.vue'
import Cloud from './components/Cloud.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="wrapper">
    <header class="pt-[10vh] h-svh relative">
      <NavBar />
      <Cloud />
    </header>

    <main class="relative">

      <!-- Qui Sommes Nous ? -->
      <div id="who" class="bg-[url('./assets/bg-1.png')] bg-cover h-lvh relative z-0">
        <img src="./assets/fog.svg" alt="" class="absolute w-full z-10 transform animate-scale-fog-2 md:animate-scale-fog-1 select-none">
        <div class="bg-opacity-0 min-h-max h-[15vh] w-full flex justify-center items-end"></div>
        <div class="h-[70vh] sticky bottom-0 shadow-2xl">
          <div class="flex justify-center w-screen items-end h-[10vh]">
            <h2 class="text-white title bg-scss-1 w-fit px-16 md:px-28 rounded-t-lg text-center select-none">Qui Sommes Nous ?</h2>
          </div>
          <div class="bg-scss-1 h-[60vh] flex flex-col justify-evenly items-center">
            <hr class="w-1/3 h-1 bg-sky-600 border-none rounded-lg">
            <p class="w-3/4 text-justify text-xs md:text-xl text-white">OGC est une initiative unique d'auto-hébergement, née de la passion commune d'un groupe d'enthousiastes du cloud computing. Notre mission est de créer une plateforme d'hébergement versatile, propulsée par l'expertise collective de nos membres, chacun apportant ses compétences spécifiques pour enrichir notre projet. Notre objectif est de fournir un service le plus indépendant possible des tiers, en mettant l'accent sur la liberté et l'autonomie technologique. Cette approche nous permet non seulement de réduire considérablement les coûts d'hébergement pour nos membres, leur offrant ainsi la possibilité de déployer leurs propres projets à des coûts minimes, mais aussi de bénéficier d'une infrastructure de qualité industrielle. Chez OGC, nous croyons fermement en l'importance de l'auto-suffisance dans le domaine du cloud computing, et nous nous engageons à développer un écosystème qui reflète cette philosophie.</p>
            <hr class="w-1/3 h-1 bg-sky-600 border-none rounded-lg">
          </div>
        </div>
        <div class="bg-opacity-0 h-[15vh]"></div>
        <img src="./assets/fog.svg" alt="" class="fog-animation absolute w-full z-10 animate-scale-fog-2 md:animate-scale-fog-1 select-none">
      </div>

      <!-- Applications -->
      <div class="min-h-dvh flex flex-col justify-center items-center gap-8">
        <div class="pt-[15vh]"></div>
        <div class="w-screen flex flex-row justify-center items-center flex-wrap">
          <div class="flex flex-col w-1/2 gap-4 md:w-1/5">
            <h2 class="text-white text-3xl">Nos services sur-mesures</h2>
            <p class="text-[#b6b6b6] text-justify">Nous ne proposons pas d'offres prédéfinies, vous choisissez vos services selon vos besoins et votre budget, sans être contraint à opter pour une offre supérieure à vos attentes. De plus, vous avez la possibilité de modifier votre service à tout moment, même pendant son utilisation, sans aucune interruption.</p>
          </div>
          <img src="./assets/Hopa-3.png" alt="" class="h-[50vh]">
        </div>
        <hr class="w-1/3 h-1 bg-[#505050] border-none rounded-lg">
        <div class="w-screen flex justify-center items-center flex-wrap flex-col-reverse md:flex-row gap-x-8">
          <img src="./assets/Hopa-2.png" alt="" class="h-[50vh]">
          <div class="flex flex-col w-1/2 gap-4 md:w-1/5">
            <h2 class="text-white text-3xl">Support dévoué</h2>
            <p class="text-[#b6b6b6] text-justify">Si vous avez une question ou besoin de contacter le support, que cela concerne un de vos services ou un problème externe, nous ferons notre possible pour vous aider, même si cela va au-delà de nos services. Nous sommes également prêts à vous conseiller et à vous permettre de tester vos instances, sans compromis.</p>
          </div>
        </div>
        <hr class="w-1/3 h-1 bg-[#505050] border-none rounded-lg">
        <div class="w-screen flex flex-row justify-center items-center flex-wrap">
          <div class="flex flex-col w-1/2 gap-4 md:w-1/5">
            <h2 class="text-white text-3xl">Contrôle total et durabilité écologique</h2>
            <p class="text-[#b6b6b6] text-justify">Nos machines sont situées dans nos propres locaux, évitant ainsi de dépendre d'autres hébergeurs cloud et de leur support externe, souvent lent ou inefficace lors d'imprévus ou de maintenances. De plus, notre empreinte carbone est nulle, car nous fonctionnons entièrement grâce à l'énergie solaire.</p>
          </div>
          <img src="./assets/Hopa-1.png" alt="" class="h-[50vh]">
        </div>
      </div>

    </main>

    <Footer />
  </div>
</template>

<style lang="scss">
  @import './assets/style.scss';
</style>
