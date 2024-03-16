<script setup>
import Fog from './Fog.vue'
</script>

<template>
    <div class="w-screen h-[90vh] relative z-10">
        <Fog color="" distanceT="12vh" distanceL="15vw" />
        <Fog color="" distanceT="32vh" distanceL="70vw" />
        <Fog color="" distanceT="50vh" distanceL="25vw" />

        <div class="absolute flex flex-col justify-center text-center items-center w-full gap-8 h-[75vh] z-5">
            <div class="flex flex-row justify-center items-center gap-4 flex-wrap">
                <img src="../assets/logo-ogc.svg" alt="" class="w-[20vh] md:w-[30vh] select-none">
                <h2 class="text-white font text-7xl select-none">Oragon Cloud</h2>
            </div>
            <p class="text-5xl pl-0 md:pl-[2rem] select-none">Projet d'auto-hébergement privé</p>
            <br class="hidden md:block">
            <br class="hidden md:block">
            <img class="w-[5.5rem] h-[5.5rem]" src="../assets/scroll.gif">
        </div>
    </div>
</template>

<script>

</script>