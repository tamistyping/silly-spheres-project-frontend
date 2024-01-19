<script setup>
import { onMounted, ref } from 'vue'
import { useCookies } from 'vue3-cookies'
import { useRouter } from 'vue-router'
import { decodeCredential } from 'vue3-google-login'

const isLoggedIn = ref(false)
const StarsRef = ref([])
const {cookies} = useCookies()
const router = useRouter()
let userName = ''

const planet = ref({
    name: '',
    star: '',
    size: '',
    lengthOfDay: '',
    lengthOfYear: '',
    atmosphere: '',
    moons: ''
})

async function addPlanet() {
    console.log('Adding planet:', planet.value);
    fetch(`${import.meta.env.VITE_API_URL}/planets/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(planet.value)
    })
        .then(res => res.json()) // Parse the response as JSON
        .then(router.replace({ name: 'explore' }))
        .then(data => {
            console.log('Planet added successfully:', data);
            planet.value = {
                name: '',
                image: '',
                star: '',
                size: '',
                lengthOfDay: '',
                lengthOfYear: '',
                atmosphere: '',
                moons: ''
            };
            router.replace({ name: 'explore' })
        })
        .catch(err => console.error('Error adding planet', err));
}


const checkSession = () => {
        if(cookies.isKey('user_session')){
            isLoggedIn.value = true
            const userData = decodeCredential(cookies.get('user_session'))
            userName = userData.given_name
        }
    }

const fetchData = () => {
    fetch(`${import.meta.env.VITE_API_URL}/stars`)
        .then(res => res.json())
        .then(result => {
            StarsRef.value = result
            console.log(StarsRef.value)
        })
        .catch(err => console.log(err))
}


onMounted(() => {
    fetchData()
    checkSession()
})


</script>

<template>
    <div>
      <div v-if="isLoggedIn" class="planetForm container mt-5" style="background-color: rgba(255, 255, 255, 0.2); padding: 20px; font-family: 'Space Grotesk';">
        <form @submit.prevent="addPlanet">
          <div class="mb-3">
            <label for="name" class="form-label">🌎 Name:</label>
            <input type="text" class="form-control" id="name" placeholder="Earth" v-model="planet.name" required>
          </div>
  
          <div class="mb-3">
            <label for="image" class="form-label">🖼️ Image URL:</label>
            <input type="text" class="form-control" id="image" placeholder="https://example.com/planet-image.jpg"
              v-model="planet.image" required>
          </div>
  
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="star" class="form-label">⭐ Star:</label>
              <select class="form-select" id="star" v-model="planet.star" required>
                <option v-for="star in StarsRef" :key="star._id" :value="star._id">{{ star.name }}</option>
              </select>
            </div>
            <div class="col-md-6 mb-3">
              <label for="size" class="form-label">📏 Size (km):</label>
              <input type="text" class="form-control" id="size" placeholder="100000" v-model="planet.size" required>
            </div>
          </div>
  
          <div class="row">
            <div class="col-md-4 mb-3">
              <label for="lengthOfDay" class="form-label">🌞 Length of Day (hrs):</label>
              <input type="text" class="form-control" id="lengthOfDay" placeholder="24 hours" v-model="planet.lengthOfDay"
                required>
            </div>
  
            <div class="col-md-4 mb-3">
              <label for="lengthOfYear" class="form-label">📅 Length of Year (days):</label>
              <input type="text" class="form-control" id="lengthOfYear" placeholder="365 days" v-model="planet.lengthOfYear"
                required>
            </div>
  
            <div class="col-md-4 mb-3">
              <label for="moons" class="form-label">🌙 Moons:</label>
              <input type="text" class="form-control" id="moons" placeholder="1" v-model="planet.moons" required>
            </div>
          </div>
  
          <div class="mb-3">
            <label for="atmosphere" class="form-label">💨 Atmosphere:</label>
            <textarea class="form-control" id="atmosphere" rows="5" placeholder="Breathable"
              v-model="planet.atmosphere" required></textarea>
          </div>
  
          <button type="submit" class="btn btn-primary">➕ Add Planet</button>
        </form>
      </div>
      <div v-else class="text-center mt-5">
        <p>Please log in to add a planet.</p>
      </div>
    </div>
  </template>