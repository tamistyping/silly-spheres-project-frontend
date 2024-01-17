<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const planet = ref({})
const route = useRoute()

onMounted(() => {

    fetch(`${import.meta.env.VITE_API_URL}/planets/${route.params.id}`)
    .then(response => response.json())
    .then( result => {
        planet.value = result
    })
    .catch(err => console.error(err))
})

const fetchData = () => {
    fetch(`${import.meta.env.VITE_API_URL}/planets/list/${route.params.sun}`)
      .then(res => res.json())
      .then(result => {
        PlanetsRef.value = result
        console.log(result);
      })
      .catch(err => console.log(err))
  }

function deletePlanet(planetId){
    fetch(`${import.meta.env.VITE_API_URL}/planets/${planetId}`, {
        method: "DELETE"
    })
    .then(() => {
        alert('planet deleted')
        fetchData()
    })
    .catch(err => console.error(err))
}

</script>

<template>
    <div>
        <h1>{{ planet.name }}</h1>
        <h3>Size: {{ planet.size }}</h3>
        <h3>Length of Day: {{ planet.lengthOfDay }}</h3>
        <h3>Length of Year: {{ planet.lengthOfYear }}</h3>
        <h3>Atmosphere: {{ planet.atmosphere }}</h3>
        <h3>Moons: {{ planet.moons }}</h3>
        <RouterLink :to="'/planet/update/' + planet._id">Edit</RouterLink>
        <button @click="deletePlanet(planet._id)">Delete</button>
    </div>
</template>  
