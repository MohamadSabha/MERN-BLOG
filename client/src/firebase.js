// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernblog-6e4f1.firebaseapp.com",
  projectId: "mernblog-6e4f1",
  storageBucket: "mernblog-6e4f1.firebasestorage.app",
  messagingSenderId: "725109771272",
  appId: "1:725109771272:web:4118cf1a57b8845870d5bd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
