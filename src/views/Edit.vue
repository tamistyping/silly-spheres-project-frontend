<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCookies } from 'vue3-cookies'
import { decodeCredential } from 'vue3-google-login'

const route = useRoute()
const router = useRouter()
const planetId = route.params.id
const {cookies} = useCookies()
const isLoggedIn = ref(false)
let userName = ''

const checkSession = () => {
        if(cookies.isKey('user_session')){
            isLoggedIn.value = true
            const userData = decodeCredential(cookies.get('user_session'))
            userName = userData.given_name
        }
    }

const planet = ref({
    name: '',
    image: '',
    size: '',
    lengthOfDay: '',
    lengthOfYear: '',
    atmosphere: '',
    moons: ''
})

const LoadPlanetData = () => {
    fetch(`${import.meta.env.VITE_API_URL}/planets/${planetId}`)
        .then(res => res.json())
        .then(data => {
            planet.value = {
                name: data.name,
                image: data.image,
                size: data.size,
                lengthOfDay: data.lengthOfDay,
                lengthOfYear: data.lengthOfYear,
                atmosphere: data.atmosphere,
                moons: data.moons
            }
        })
}

const updatePlanet = (e) => {
    e.preventDefault()
    fetch(`${import.meta.env.VITE_API_URL}/planets/${planetId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(planet.value)
    })
        .then(() => {
            console.log('planet updated success');
            // checkSession()
            // console.log('session checked after update');
            router.replace({ name: 'explore' })
        })
        .catch(err => console.error(err))
}

onMounted(() => {
    LoadPlanetData()
    checkSession()
})

</script>

<template>
    <div v-if="isLoggedIn" class="planetForm container mt-3 mb-3" style="background-color: rgba(255, 255, 255, 0.2); padding: 20px; font-family: 'Space Grotesk';">
      <form @submit.prevent="addPlanet">
        <div class="mb-3">
          <label for="name" class="form-label">🌎 Name:</label>
          <input type="text" class="form-control" id="name" placeholder="Earth" v-model="planet.name" required>
        </div>
  
        <div class="row mb-3">
          <div class="col-md-4">
            <label for="size" class="form-label">📏 Size (km):</label>
            <input type="text" class="form-control" id="size" placeholder="100000" v-model="planet.size" required>
          </div>
          <div class="col-md-8">
            <label for="image" class="form-label">🖼️ Image URL:</label>
            <input type="text" class="form-control" id="image" placeholder="https://example.com/planet-image.jpg" v-model="planet.image" required>
          </div>
        </div>
  
        <div class="row">
          <div class="col-md-4 mb-3">
            <label for="lengthOfDay" class="form-label">🌞 Length of Day (hrs):</label>
            <input type="text" class="form-control" id="lengthOfDay" placeholder="24 hours" v-model="planet.lengthOfDay" required>
          </div>
  
          <div class="col-md-4 mb-3">
            <label for="lengthOfYear" class="form-label">📅 Length of Year (days):</label>
            <input type="text" class="form-control" id="lengthOfYear" placeholder="365 days" v-model="planet.lengthOfYear" required>
          </div>
  
          <div class="col-md-4 mb-3">
            <label for="moons" class="form-label">🌙 Moons:</label>
            <input type="text" class="form-control" id="moons" placeholder="1" v-model="planet.moons" required>
          </div>
        </div>
  
        <div class="mb-3">
          <label for="atmosphere" class="form-label">💨 Atmosphere:</label>
          <textarea class="form-control" id="atmosphere" rows="5" placeholder="Breathable" v-model="planet.atmosphere" required></textarea>
        </div>
  
        <button @click="updatePlanet" class="btn btn-primary mt-3">Update Planet</button>
      </form>
    </div>
  </template>