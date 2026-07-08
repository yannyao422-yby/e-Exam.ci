// On importe les outils de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Votre configuration (votre "e-Exam-ci" Firebase)
const firebaseConfig = {
  apiKey: "e-exam-ci",
  authDomain: "e-exam-ci.firebaseapp.com",
  projectId: "e-exam-ci",
  storageBucket: "e-exam-ci.appspot.com",
  messagingSenderId: "VOTRE_SENDER_ID",
  appId: "VOTRE_APP_ID"
};

// Initialisation
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// On va chercher la question
async function chargerQuestion() {
    const querySnapshot = await getDocs(collection(db, "Questions"));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        // On remplace le texte "Chargement..." par votre question
        document.getElementById("question").innerText = data.énoncé;
    });
}

// On lance la fonction
chargerQuestion();
