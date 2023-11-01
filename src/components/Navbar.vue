<script setup lang="ts">
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'
async function signOutUser() {
  await signOut(auth)
}
</script>

<template>
  <nav>
    <h3>MyTodos</h3>
    <button @click="signOutUser">Cerrar Sesion</button>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  padding: 15px 10px;
  background-color: whitesmoke;
  justify-content: space-between;
}
h3 {
  margin: 0;
}
</style>
