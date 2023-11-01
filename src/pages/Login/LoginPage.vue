<script setup lang="ts">
import { ref } from 'vue'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'
import router from '@/router'

const isLoginShown = ref(true)

const email = ref('')
const password = ref('')

async function login() {
  try {
    const loginRequest = await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/tareas')
  } catch (error) {
    alert(error)
  }
}

async function signUp() {
  try {
    const signUpRequest = await createUserWithEmailAndPassword(auth, email.value, password.value)
    isLoginShown.value = true
  } catch (error) {
    alert(error)
  }
}
</script>

<template>
  <div v-if="isLoginShown">
    <h1>Login</h1>
    <div class="credentials-container">
      <div>
        <label for="email">Email: </label>
        <input v-model="email" type="email" />
      </div>
      <div>
        <label for="password">Contraseña: </label>
        <input v-model="password" type="password" />
      </div>
    </div>
    <div class="btn-container">
      <button class="login-btn" @click="login" type="button">Iniciar Sesión</button>
      <button class="register-btn" @click="isLoginShown = false" type="button">Registrarme</button>
    </div>
  </div>
  <div v-else>
    <h1>Registro</h1>
    <div class="credentials-container">
      <p>Crea una nueva cuenta con correo y contraseña</p>
      <div>
        <label for="email">Email: </label>
        <input v-model="email" type="email" />
      </div>
      <div>
        <label for="password">Contraseña: </label>
        <input v-model="password" type="password" />
      </div>
    </div>
    <div class="btn-container">
      <button @click="isLoginShown = true" type="button">Cancelar</button>
      <button @class="register-btn" @click="signUp" type="button">Registrame</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}

.credentials-container {
  margin: auto;
  width: 500px;
  background-color: rgb(138, 167, 234);
  border: 1px rgb(217, 217, 217) solid;
  border-radius: 15px;
}

.credentials-container > div {
  width: 60%;
  margin: 15px auto;
}

input {
  padding: 7px 5px;
  border-radius: 10px;
  border: 0.5px solid rgb(207, 207, 207);
}

button {
  display: inline-block;
  margin: 10px;
  padding: 5px 10px;
  border: 0.5px solid rgb(207, 207, 207);
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
}

.login-btn:hover {
  background-color: rgb(0, 75, 226);
  color: white;
}

.register-btn:hover {
  background-color: rgb(65, 9, 232);
  color: white;
}

.btn-container {
  margin: auto;
  width: max-content;
}

p {
  text-align: center;
}
</style>
