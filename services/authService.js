import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export async function registerAuth(email, password){
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  return cred.user;
}

