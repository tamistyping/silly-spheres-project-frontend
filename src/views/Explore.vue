<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const StarsRef = ref([])

const fetchData = () => {
  fetch(`${import.meta.env.VITE_API_URL}/stars`)
  .then(res => res.json())
  .then(result => {
    StarsRef.value = result
  })
  .catch(err => console.log(err))
}

onMounted(() => {
  fetchData()
})

</script>

<template>
  <div class="about container mt-3">
    <h3 class="text-center mb-2 mt-4" style="font-family: 'Space Grotesk';">Choose a star 👇</h3>
    <div class="row">
      <div v-for="star in StarsRef" :key="star.id" class="col-md-4 mb-3">
        <RouterLink :to="`/planetslist/${star._id}`" class="text-decoration-none">
          <div class="custom-card">
            <img :src="star.image" alt="Star Image" class="card-img-top image-star-container" />
            <div class="card-body text-center p-0 star-info">
              <h5 class="card-title m-0">{{ star.name }}</h5>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
