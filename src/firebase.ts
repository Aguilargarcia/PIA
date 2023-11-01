// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA11GS0fZ6Vuaa1ZBYDuVG5_d_UfNc8e-c",
  authDomain: "proyecto-integrador-822d5.firebaseapp.com",
  projectId: "proyecto-integrador-822d5",
  storageBucket: "proyecto-integrador-822d5.appspot.com",
  messagingSenderId: "843020108598",
  appId: "1:843020108598:web:d7602e5d13466eb551e997"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// Instancia de autenticación
export const auth = getAuth()

// Base de datos
export const db = getFirestore(app)
