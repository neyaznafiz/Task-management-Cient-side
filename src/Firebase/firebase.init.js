// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEh7kZ1edZFdGWpotGKUJGROffps3GJb4",
    authDomain: "your-daily-todo.firebaseapp.com",
    projectId: "your-daily-todo",
    storageBucket: "your-daily-todo.appspot.com",
    messagingSenderId: "936736548429",
    appId: "1:936736548429:web:5601a4c7009f19df795e04"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;