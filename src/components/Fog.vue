<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    distanceT: String,
    distanceL: String
})
</script>

<template>
    <div :style="{ top: distanceT, left: distanceL }" class="fog absolute">
        
        <div class="line">
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
        <div class="line">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>