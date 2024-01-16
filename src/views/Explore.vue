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
  <div class="about">
    <h1>This is an explore page</h1>
    <ul>
      <li v-for="star in StarsRef" :key="star.id">
        <RouterLink :to="`/planetslist/${star._id}`">{{ star.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
