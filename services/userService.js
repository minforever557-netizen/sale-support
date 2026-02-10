import { db } from "./firebase.js";
import { doc, setDoc } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function saveUser(uid, data){
  await setDoc(doc(db, "users", uid), {
    ...data,
    role: "User",
    createdAt: new Date()
  });
}

