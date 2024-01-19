<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div class="container-fluid p-3"
        style="background-color: rgba(255, 255, 255, 0.5); width: 100%; font-family: 'Space Grotesk';">
        <a href="/">
            <h1 class="mt-3 fw-bold lh-base text-center">Silly Spheres</h1>
        </a>

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
    </div>

    <RouterView />
</template>