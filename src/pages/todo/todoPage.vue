<script setup lang="ts">
import {doc, getDoc, updateDoc, deleteDoc} from 'firebase/firestore';
import {db} from "@/firebase";
import {ref,onMounted} from "vue";
import {useRoute} from "vue-router"; //
import router from "@/router"

const route = useRoute()
const todo =ref({
    title:'',
    description:'',
    priority:0,
    status:'',
    expires_at: new Date()
})


async function getTodo(){
    const docRef = doc(db,"todos", route.params.id as string)
    const docSnapshot = await getDoc(docRef);
    if(docSnapshot.exists()){
        //Asignar tarea a una variable
        todo.value=docSnapshot.data();
    }
}
function goToTodosPage(){
    router.push('/tareas')
}
async function completeTodo(){
    //Status => 'completed'
    try {
        const docRef = doc(db, "todos", route.params.id as string)
    await updateDoc(docRef,{
        status:'completed'
    })
    router.push('/tareas')
    } catch (error) {
        alert(error)
    }
}

async function deleteTodo() {
    try {
        await deleteDoc(doc(db, 'todos', route.params.id as string))
        router.push('/tareas')
    } catch (error) {
        alert(error)
    }
}
onMounted(()=>{
    getTodo();
})

</script>

<template>
    <div class="tarea">
        <h3>Titulo: {{ todo.title }}</h3>
        <p>Descripcion: {{ todo.description }}</p>
        <p>Fecha de expiracion: {{ todo.expires_at}}</p>
        <p><strong>Prioridad: </strong> {{ todo.priority}}</p>
        <p><strong>Estatus de la tarea: </strong> {{ todo.status }}</p>
    </div>
    <div class="btn">
        <button id="bt_1" @click="completeTodo()">Completar</button>
        <button id="bt_2" @click="goToTodosPage()">Salir de la tarea</button>
        <button id="bt_3" @click="deleteTodo()">Borrar</button>
    </div>
</template>

<style scoped>

.tarea{

    text-align: center;
    font-family: verdana;
    background-color: #B0C4DE;
    margin: auto;
    padding: 20px;
    color: white;
}
.btn{
    display: flex;
    border-radius: 15px;
    border: none;
    padding: 20px;  
    font-size: 25px;  
    flex-direction: column;
    font-size: 20px;
}

#bt_1{
    margin: 0px 150px;
}


#bt_2{
    margin: 20px 150px;
}

#bt_3{
    margin: 0px 150px;
}

</style>


