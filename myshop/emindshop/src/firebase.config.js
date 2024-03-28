

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ12zCsFm9gSoB7nECAZ7HyuqggY_O6Vo",
  authDomain: "doanhiie.firebaseapp.com",
  projectId: "doanhiie",
  storageBucket: "doanhiie.appspot.com",
  messagingSenderId: "813875831836",
  appId: "1:813875831836:web:3e7e7ad6fdbd054d4febd9",
  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;