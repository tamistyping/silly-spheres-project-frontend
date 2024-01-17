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
    <div v-if="isLoggedIn">
        <h1>Edit Planet</h1>
        <div class="planetForm">
            <form action="#">
                <label for="name">Name: </label>
                <input type="text" name="name" placeholder="Earth" v-model="planet.name" required>
                
                <label for="image">Image URL: </label>
                <input type="text" name="image" placeholder="https://example.com/planet-image.jpg" v-model="planet.image" required>
                
                <label for="size"> Size: </label>
                <input type="text" name="size" placeholder="Medium" v-model="planet.size" required>

                <label for="lengthOfDay"> Length of Day: </label>
                <input type="text" name="lengthOfDay" placeholder="24 hours" v-model="planet.lengthOfDay" required>

                <label for="lengthOfYear"> Length of Year: </label>
                <input type="text" name="lengthOfYear" placeholder="365 days" v-model="planet.lengthOfYear" required>

                <label for="atmosphere"> Atmosphere: </label>
                <input type="text" name="atmosphere" placeholder="Breathable" v-model="planet.atmosphere" required>

                <label for="moons"> Moons: </label>
                <input type="text" name="moons" placeholder="1" v-model="planet.moons" required>

                <button @click="updatePlanet"> Update Planet </button>
            </form>
        </div>
    </div>
</template>