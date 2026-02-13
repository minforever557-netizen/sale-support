import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyB-hmq1yBj4XzwqGoP8Llra-XuBE4yWGM8",

  authDomain: "sale-support-system-b8b6b.firebaseapp.com",

  projectId: "sale-support-system-b8b6b",

  storageBucket: "sale-support-system-b8b6b.firebasestorage.app",

  messagingSenderId: "174733875108",

  appId: "1:174733875108:web:938fb1dbdb186980e99331"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
