<script setup lang="ts">
import { ref } from 'vue'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase'
import router from '@/router'

const title = ref('')
const description = ref('')
const priority = ref(0)
const expirationDate = ref('')

async function createTodo() {
  try {
    const docRef = await addDoc(collection(db, 'todos'), {
      title: title.value,
      description: description.value,
      priority: priority.value,
      expires_at: expirationDate.value,
      status: 'pending'
    })
    router.push('/tareas')
  } catch (error) {
    alert(error)
  }
}
</script>

<template>
  <div class="crear">
    <label for="title">Titulo: </label>
    <input v-model="title" type="text" /> <br />
    <label for="title">Descripcion: </label>
    <input v-model="description" type="text" /> <br />
    <label for="title">Fecha de Vencimiento: </label>
    <input required v-model="expirationDate" type="date" /><br />
    <label for="title">Prioridad: </label>
    <input v-model="priority" type="number" /><br />
  </div>
  <div class="but">
  <button @click="createTodo">Guardar</button>
  </div>
</template>

<style scoped>
.crear{
  text-align: center;
  font-family: verdana;
  margin: auto;
  width: 80px;
}
.but{
  border-radius: 15px;
  border: none;
  text-align: center;
  padding-top: 30px;
}
</style>
