<script setup lang="ts">
import { onAuthStateChanged } from 'firebase/auth'
import { RouterView } from 'vue-router'
import { auth } from './firebase'
import router from './router'

onAuthStateChanged(auth, (user) => {
  if (!user) router.push('/login')
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
