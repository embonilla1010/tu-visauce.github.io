import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const db = getFirestore(app);

await setDoc(doc(db, "usuarios", auth.currentUser.uid), {
  email: auth.currentUser.email,
  creado: new Date()
});
