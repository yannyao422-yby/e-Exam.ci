import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Remplacez ces valeurs par vos vraies clés Firebase
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "e-exam-ci.firebaseapp.com",
  projectId: "e-exam-ci",
  storageBucket: "e-exam-ci.appspot.com",
  messagingSenderId: "VOTRE_SENDER_ID",
  appId: "VOTRE_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function chargerQuestion() {
    try {
        const querySnapshot = await getDocs(collection(db, "Questions"));
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            // Cela va injecter le texte de Firebase dans votre balise H1
            document.getElementById("question").innerText = data.énoncé;
        });
    } catch (e) {
        console.error("Erreur de connexion : ", e);
    }
}

chargerQuestion();
