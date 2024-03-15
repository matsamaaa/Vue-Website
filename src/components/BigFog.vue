<script setup>
import { defineProps, onMounted } from 'vue'

const props = defineProps({
    distanceT: String,
    distanceL: String
})

    onMounted(() => {
        const fogs = document.querySelectorAll(".big-fog");
        fogs.forEach(fog => {
            const spans = fog.querySelectorAll('span');
            spans.forEach(span => {
                span.style.backgroundColor = getRandomColor();
            });
        });
    });

    function getRandomColor() {
        const colors = ['rgb(255,255,255)', 'rgb(221,221,221)'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }
</script>

<template>
    <div :style="{ top: distanceT, left: distanceL }" class="big-fog absolute bottom-[-20px]">
        <div class="line">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="line">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="line">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>