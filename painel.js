import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBktKrRP4AjLUcdeEdyTlT2Q9hHdV5y7nQ",
  authDomain: "metodo-forja.firebaseapp.com",
  projectId: "metodo-forja",
  storageBucket: "metodo-forja.appspot.com",
  messagingSenderId: "947913980364",
  appId: "1:947913980364:web:5c1b55fbbe082821ea06ab"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.gerarCodigo = async function () {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  try {
    await setDoc(doc(db, "codigos_acesso", code), {
      usado: false,
      criadoEm: new Date()
    });
    document.getElementById("codigoGerado").textContent = "Código gerado: " + code;
    document.getElementById("erroFirestore").textContent = "";
  } catch (e) {
    document.getElementById("erroFirestore").textContent = "Erro ao gravar código no Firestore.";
  }
};

window.logout = function () {
  window.location.href = "index.html";
}
