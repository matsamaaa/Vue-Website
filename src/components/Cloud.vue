<script setup>
import Fog from './Fog.vue'
import BigFog from './BigFog.vue'

import { ref, onMounted } from 'vue'

const bigFogWidth = ref(0);

onMounted(() => {
    const bigFog = document.querySelector(".big-fog");
    bigFogWidth.value = bigFog.offsetWidth;

    console.log(bigFog.offsetWidth)
});
</script>

<template>
    <div class="w-screen h-[90vh] relative">
        <Fog color="" distanceT="15vh" distanceL="25vw" />
        <Fog color="" distanceT="30vh" distanceL="70vw" />
        <Fog color="" distanceT="60vh" distanceL="10vw" />

        

        <template v-if="bigFogWidth > 0">
            <p>test</p>
            <BigFog v-for="index in Math.ceil(screenWidth / bigFogWidth)"
                :key="index"
                color=""
                distanceT="80vh"
                distanceL="(index * bigFogWidth) + 'px'" />
        </template>
    </div>
</template>