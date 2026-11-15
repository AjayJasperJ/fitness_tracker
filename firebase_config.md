// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4m3Fz4p3lwyXWsGD8PFcXdaGbJQOqXzM",
  authDomain: "fitnesstracker-ec7f0.firebaseapp.com",
  projectId: "fitnesstracker-ec7f0",
  storageBucket: "fitnesstracker-ec7f0.firebasestorage.app",
  messagingSenderId: "784799575059",
  appId: "1:784799575059:web:29a66fc169ccab2b9d63e6",
  measurementId: "G-8B5CKCX53N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
