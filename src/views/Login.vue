<script setup>
    import {ref, onMounted} from 'vue'
    import { useCookies } from 'vue3-cookies'
    import {decodeCredential, googleLogout} from 'vue3-google-login'

    const {cookies} = useCookies()

    let isLoggedIn = ref(false)
    let userName = ''

    const callback = (response) => {
        isLoggedIn.value = true
        const userData = decodeCredential(response.credential)
        console.log(userData);
        userName = userData.given_name
        cookies.set('user_session', response.credential)
        fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                userEmail: userData.email
            })
        })
        .then(() => {
            console.log('session executed');
        })
        .catch(err => console.error(err))
    }

    const checkSession = () => {
        if(cookies.isKey('user_session')){
            isLoggedIn.value = true
            const userData = decodeCredential(cookies.get('user_session'))
            userName = userData.given_name
        }
    }
    
    
    const handleLogout = async () => {
        await googleLogout()
        cookies.remove('user_session')
        isLoggedIn.value = false
    }
    
    onMounted(checkSession)

</script>

<template>
    <div class="container mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-md-6" style="font-family: 'Space Grotesk';">
          
          <div v-if="isLoggedIn" class="text-center">
            <h2>Hello {{ userName }}</h2>
            <button @click="handleLogout" class="btn btn-danger mt-3">Log Out</button>
          </div>
          
          <div v-else class="text-center">
            <GoogleLogin :callback="callback" />
          </div>
        </div>
      </div>
    </div>
  </template>