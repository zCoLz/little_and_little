// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Connect Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCgNyiGoOKgdud5oHy428eV75H1mCD44TU",
    authDomain: "little-and-little-b99e9.firebaseapp.com",
    databaseURL: "https://little-and-little-b99e9-default-rtdb.firebaseio.com",
    projectId: "little-and-little-b99e9",
    storageBucket: "little-and-little-b99e9.appspot.com",
    messagingSenderId: "935494548293",
    appId: "1:935494548293:web:67aeb1f641bb1900fedc2c",
    measurementId: "G-81N84N8FZW"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app)