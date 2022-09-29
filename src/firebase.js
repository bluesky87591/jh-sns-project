// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhGI1fDO_7-WlXkvDQzocig6QiLGLq0q8",
  authDomain: "jh-sns-project.firebaseapp.com",
  projectId: "jh-sns-project",
  storageBucket: "jh-sns-project.appspot.com",
  messagingSenderId: "735864275139",
  appId: "1:735864275139:web:052d2dddded53a5c09e276"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;