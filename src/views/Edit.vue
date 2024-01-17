<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const planetId = route.params.id

const planet = ref({
    name: '',
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
                title: data.title,
                name: data.name,
                size: data.size,
                lengthOfDay: data.lengthOfDay,
                lengthOfYear: data.lengthOfYear,
                atmosphere: data.atmosphere,
                moons: data.moons
            }
        })
}

const updateBook = () => {
    fetch(`${import.meta.env.VITE_API_URL}/planets/${planetId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(planet.value)
    })
        .then(() => {
            router.replace({ name: 'planet' })
        })
        .catch(err => console.error(err))
}

onMounted(LoadPlanetData)
</script>

<template>
    <h1>Edit Planet</h1>
    <div>
        <div class="planetForm">
            <form action="#">
                <label for="name">Name: </label>
                <input type="text" name="name" placeholder="Earth" v-model="planet.name" required>

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

                <button @click="updateBook"> Update Book </button>
            </form>
        </div>
    </div>
</template>