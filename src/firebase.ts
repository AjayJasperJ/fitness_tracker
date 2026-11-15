import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const app=initializeApp({apiKey:'AIzaSyD4m3Fz4p3lwyXWsGD8PFcXdaGbJQOqXzM',authDomain:'fitnesstracker-ec7f0.firebaseapp.com',projectId:'fitnesstracker-ec7f0',storageBucket:'fitnesstracker-ec7f0.firebasestorage.app',messagingSenderId:'784799575059',appId:'1:784799575059:web:29a66fc169ccab2b9d63e6'});
export const auth=getAuth(app);export const db=getFirestore(app);
