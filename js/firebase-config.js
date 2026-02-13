// Firebase v12 Modular SDK

import { initializeApp } from 
"https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import { getAuth } from 
"https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

import { getFirestore } from 
"https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-hmq1yBj4XzwqGoP8Llra-XuBE4yWGM8",
  authDomain: "sale-support-system-b8b6b.firebaseapp.com",
  projectId: "sale-support-system-b8b6b",
  storageBucket: "sale-support-system-b8b6b.firebasestorage.app",
  messagingSenderId: "174733875108",
  appId: "1:174733875108:web:938fb1dbdb186980e99331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Services
export const auth = getAuth(app);
export const db = getFirestore(app);
