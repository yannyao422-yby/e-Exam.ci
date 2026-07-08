import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "e-exam-ci.firebaseapp.com",
  projectId: "e-exam-ci",
  storageBucket: "e-exam-ci.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function chargerQuestion() {
    try {
        const querySnapshot = await getDocs(collection(db, "Questions"));
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            // Attention : assurez-vous que c'est exactement "énoncé" ou "enonce"
            // comme c'est écrit dans votre base Firestore
            document.getElementById("question").innerText = data.énoncé;
        });
    } catch (error) {
        console.error("Erreur :", error);
    }
}

chargerQuestion();
