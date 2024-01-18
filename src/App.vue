<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    
<h1 class="text-center lh-base mt-4">Silly Spheres</h1>
<nav class="navbar navbar-expand navbar-light">
  <div class="navbar-collapse justify-content-center">
    <ul class="navbar-nav">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/explore">Explore</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/create">Create</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/login">Login</RouterLink>
      </li>
    </ul>
  </div>
</nav>



<RouterView />

</template>