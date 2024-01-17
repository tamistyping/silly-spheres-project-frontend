<script setup>
import { onMounted, ref } from 'vue'

const StarsRef = ref([])

const planet = ref({
    name: '',
    star: '',
    size: '',
    lengthOfDay: '',
    lengthOfYear: '',
    atmosphere: '',
    moons: ''
})

function addPlanet() {
    console.log('Adding planet:', planet.value);
    fetch(`${import.meta.env.VITE_API_URL}/planets/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(planet.value)
    })
        .then(res => {
            console.log('Planet added successfully:', data);
            planet.value = {
                name: '',
                star: '',
                size: '',
                lengthOfDay: '',
                lengthOfYear: '',
                atmosphere: '',
                moons: ''
            }
            console.log(res);
        })
        .catch(err => console.error('error adding planet', err))
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

onMounted(fetchData)


</script>

<template>
    <div>
        <h3>Add a new planet</h3>
        <div class="planetForm">
            <form action="#">
                <label for="name">Name: </label>
                <input type="text" name="name" placeholder="Earth" v-model="planet.name" required>

                <label for="star"> Star: </label>
                <select name="star" id="star" v-model="planet.star">
                    <option v-for="star in StarsRef" :key="star._id" :value="star._id">{{ star.name }}</option>
                </select>

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

                <button @click="addPlanet">Add Planet</button>
            </form>
        </div>
    </div>
</template>