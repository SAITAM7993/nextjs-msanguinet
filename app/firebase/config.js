// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAxFJYIXiI8iYEWs-GUTHE63XxYtyhpWZQ',
  authDomain: 'ecommerce-next-9279a.firebaseapp.com',
  projectId: 'ecommerce-next-9279a',
  storageBucket: 'ecommerce-next-9279a.appspot.com',
  messagingSenderId: '956131450804',
  appId: '1:956131450804:web:1fe98c8cceee350f251ce1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //sin el export no funciona
export const storage = getStorage(app); //storage, para imgs por ej
