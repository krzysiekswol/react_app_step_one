// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtdERju4iKXRyJsBHgwK-zwmu-5c1QeMg",
  authDomain: "react-aviation-app.firebaseapp.com",
  databaseURL: "https://react-aviation-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-aviation-app",
  storageBucket: "react-aviation-app.firebasestorage.app",
  messagingSenderId: "1039941862277",
  appId: "1:1039941862277:web:e131bf071d91ba3017faec",
  measurementId: "G-XW27DZHC1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;