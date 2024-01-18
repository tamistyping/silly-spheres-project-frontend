  
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
    <div class="planets container mt-3">
      <h3 class="text-center mb-3 mt-4">Choose a Planet 👇</h3>
      <div class="row">
        <div v-for="planet in PlanetsRef" :key="planet._id" class="col-md-4 mb-3">
          <RouterLink :to="'/planets/' + planet._id" class="text-decoration-none">
            <div class="custom-card">
              <div class="image-container">
                <img :src="planet.image" alt="Planet Image" class="card-img-top" />
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </template>