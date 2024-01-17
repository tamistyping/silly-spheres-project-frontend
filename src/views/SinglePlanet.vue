<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { useCookies } from 'vue3-cookies'
import { decodeCredential } from 'vue3-google-login'

const isLoggedIn = ref(false)
const planet = ref({})
const route = useRoute()
const {cookies} = useCookies()

let userName = ''

onMounted(() => {
    checkSession()
    fetch(`${import.meta.env.VITE_API_URL}/planets/${route.params.id}`)
    .then(response => response.json())
    .then( result => {
        planet.value = result
    })
    .catch(err => console.error(err))
})

const fetchData = () => {
    fetch(`${import.meta.env.VITE_API_URL}/planets/list/${route.params.star}`)
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

const checkSession = () => {
        if(cookies.isKey('user_session')){
            isLoggedIn.value = true
            const userData = decodeCredential(cookies.get('user_session'))
            userName = userData.given_name
        }
    }

</script>

<template>
    <div>
        <h1>{{ planet.name }}</h1>
        <!-- <div class="image-container"> -->
            <img :src="planet.image" alt="Planet Image" class="image-container">
        <!-- </div> -->
        <h3>Size: {{ planet.size }}</h3>
        <h3>Length of Day: {{ planet.lengthOfDay }}</h3>
        <h3>Length of Year: {{ planet.lengthOfYear }}</h3>
        <h3>Atmosphere: {{ planet.atmosphere }}</h3>
        <h3>Moons: {{ planet.moons }}</h3>
        <RouterLink v-if="isLoggedIn" :to="'/planet/update/' + planet._id">Edit</RouterLink>
        <button v-if="isLoggedIn" @click="deletePlanet(planet._id)">Delete</button>
    </div>
</template>

