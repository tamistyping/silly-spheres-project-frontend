<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const planet = ref({})

onMounted(() => {
    const route = useRoute()

    fetch(`${import.meta.env.VITE_API_URL}/planets/${route.params.id}`)
    .then(response => response.json())
    .then( result => {
        planet.value = result
    })
    .catch(err => console.error(err))
})
</script>

<template>
    <div>
        <h1>{{ planet.name }}</h1>
        <h3>Size: {{ planet.size }}</h3>
        <h3>Length of Day: {{ planet.lengthOfDay }}</h3>
        <h3>Length of Year: {{ planet.lengthOfYear }}</h3>
        <h3>Atmosphere: {{ planet.atmosphere }}</h3>
        <h3>Moons: {{ planet.moons }}</h3>
    </div>
</template>  
