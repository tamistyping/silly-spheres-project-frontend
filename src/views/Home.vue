<template>
  <div class="container text-center mt-4 p-3" style="background-color: rgba(255, 255, 255, 0.3); border-radius: 10px;">
    <p class="lead mb-1">
      Welcome to Silly Spheres – where creativity knows no bounds and the universe is your playground! 🚀✨ <br><br>
      Embark on an intergalactic journey with our MEVN-built app that seamlessly combines functionality and fun. Silly Spheres invites you to explore a cosmos of your creation, allowing you to view, create, and edit planets with just a few clicks.
    </p>
  </div>

  <div id="app" class="container d-flex justify-content-center align-items-center flex-column mt-4">
    <h4 class="text-center mb-3">NASA Daily Picture:</h4>

    <main class="mb-3">
      <img v-if="imageUrl" :src="imageUrl" alt="NASA Image of the Day" class="img-fluid rounded border"
        style="max-width: 600px;" />
    </main>

    <div class="text-center">
      <p class="text-muted">{{ imageCredit }}</p>
    </div>
</div></template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const imageUrl = ref('');
    const imageDescription = ref('');
    const imageCredit = ref('');
    const apiKey = import.meta.env.VITE_EXTERNAL_API_URL;
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    onMounted(() => {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log('API Response:', data);
          imageUrl.value = data.url;
          imageDescription.value = data.explanation;
          imageCredit.value = `Credit: ${data.copyright}`;
        })
        .catch(error => console.error('Error fetching NASA API:', error));
    });

    return {
      imageUrl,
      imageDescription,
      imageCredit
    };
  }
};
</script>