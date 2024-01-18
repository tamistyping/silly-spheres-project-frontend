<template>
  <div id="app" class="d-flex justify-content-center align-items-center flex-column">
    <h4 class="text-center mb-3 mt-4"> NASA Daily Picture:</h4>
    <main class="mb-3">
      <img v-if="imageUrl" :src="imageUrl" alt="NASA Image of the Day" class="img-fluid rounded border"
        style="max-width: 600px;" />
    </main>
    <div class="text-center">
      <p class="text-muted">{{ imageCredit }}</p>
    </div>
  </div>
</template>

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