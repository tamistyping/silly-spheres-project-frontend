<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useCookies } from 'vue3-cookies'
import { decodeCredential } from 'vue3-google-login'

const isLoggedIn = ref(false)
const planet = ref({})
const route = useRoute()
const router = useRouter()
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
        router.replace({ name: 'explore' })
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
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <img :src="planet.image" alt="Planet Image" class="img-fluid rounded">
        </div>
        <div class="col-md-6 mt-5">
          <table class="table table-bordered" style="background-color: rgba(255, 255, 255, 0.7);">
            <tbody>
              <tr>
                <th scope="row" class="bg-primary text-white">Name</th>
                <td>{{ planet.name }}</td>
              </tr>
              <tr>
                <th scope="row" class="bg-primary text-white">Size</th>
                <td>{{ planet.size }}</td>
              </tr>
              <tr>
                <th scope="row" class="bg-primary text-white">Length of Day</th>
                <td>{{ planet.lengthOfDay }}</td>
              </tr>
              <tr>
                <th scope="row" class="bg-primary text-white">Length of Year</th>
                <td>{{ planet.lengthOfYear }}</td>
              </tr>
              <tr>
                <th scope="row" class="bg-primary text-white">Atmosphere</th>
                <td>{{ planet.atmosphere }}</td>
              </tr>
              <tr>
                <th scope="row" class="bg-primary text-white">Moons</th>
                <td>{{ planet.moons }}</td>
              </tr>
            </tbody>
          </table>
          <div v-if="isLoggedIn">
            <RouterLink :to="'/planet/update/' + planet._id" class="btn btn-primary mr-2">Edit</RouterLink>
            <button @click="deletePlanet(planet._id)" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>

