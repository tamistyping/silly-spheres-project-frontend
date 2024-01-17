  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink } from 'vue-router'
  import { useRoute } from 'vue-router';
  
  const PlanetsRef = ref([])
  const route = useRoute()

  const fetchData = () => {
    fetch(`${import.meta.env.VITE_API_URL}/planets/list/${route.params.star}`)
      .then(res => res.json())
      .then(result => {
        PlanetsRef.value = result
        console.log(result);
      })
      .catch(err => console.log(err))
  }
  
  onMounted(() => {
    fetchData()
  })
  
  </script>

<template>
    <div class="planets">
      <h1>Click on a planet to find out more!</h1>
      <ul>
        <li v-for="planet in PlanetsRef" :key="planet._id">
          <RouterLink :to="'/planets/' + planet._id"><img :src="planet.image" alt="Planet Image" class="image-container">{{ planet.name }}</RouterLink>
          
        </li>
      </ul>
    </div>
  </template>