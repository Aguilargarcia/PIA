<script setup>
import { doc, collection, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { onMounted, ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import router from '@/router'

const todos = ref()

async function getTodos() {
  const collectionRef = collection(db, 'todos')
  const todosSnapshot = await getDocs(collectionRef)
  todos.value = todosSnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      status: doc.data().status,
      expires_at: doc.data().expires_at,
      priority: doc.data().priority
    }
  })
}

function goToCreateTodo() {
  router.push('/crear-tarea')
}

function goToTodo(id) {
    router.push(`/tarea/${id}`) 

}

async function completeTodo(id){
    //Status => 'completed'
    try {
        const docRef = doc(db, "todos", id)
    await updateDoc(docRef,{
        status:'completed'
    })
    } catch (error) {
        alert(error)
    }
}

onMounted(() => {
  getTodos() // Get Todos when the page loads for first time or after refreshing it
})
</script>

<template>
  <Navbar />
  <h2>Mi lista de tareas</h2>
  <button @click="goToCreateTodo" type="button" class="create-btn">Crear una nueva tarea</button>
  <div class="todos-container">
    <div v-for="todo in todos" class="todo-item">
      <div class="complete">
        <button @click="completeTodo(todo.id)">Completar ✔</button>
      </div>
      <div class="info">
        <h5 :class="todo.status === 'pending' ? 'red' : 'green' " @click="goToTodo(todo.id)">{{ todo.title }}</h5>
        <p>{{ todo.expires_at }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}

.create-btn {
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: rgb(11, 87, 252);
  color: white;
  float: right;
  cursor: pointer;
}

.todos-container {
  margin: 60px auto;
  width: 800px;
  background-color: whitesmoke;
  height: 400px;
  overflow: auto;
  border: 1px solid gray;
  border-radius: 20px;
}

.todo-item {
  margin: auto;
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
  width: 80%;
  display: flex;
  align-items: center;
}

.complete {
  width: 30%;
}

.info {
  width: 70%;
}
.red{
  color: red;
}
.green{
color: green;
}

</style>
