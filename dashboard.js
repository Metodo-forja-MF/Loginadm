
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKtKrRP4AjLHcdeEdyTlTZC9hHdv5y7no",
  authDomain: "metodo-forja.firebaseapp.com",
  projectId: "metodo-forja",
  storageBucket: "metodo-forja.appspot.com",
  messagingSenderId: "949719386034",
  appId: "1:949719386034:web:5c015b5fbe082821ea86ab",
  measurementId: "G-6Z9EJLY5LZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("generateBtn").addEventListener("click", async () => {
  const code = Math.random().toString(36).substring(2, 10).toUpperCase();
  try {
 await setDoc(doc(db, "codigos_acesso", idAleatorio), {
  criadoEm: new Date(),
  usado: false,
});

      criadoEm: serverTimestamp()
    });
    document.getElementById("codeDisplay").textContent = "Código gerado: " + code;
  } catch (error) {
    document.getElementById("codeDisplay").textContent = "Erro ao gerar código.";
  }
});
