import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKtkRrPA4jLHUcdeEdylTI2C9hWd5y7n0",
  authDomain: "metodo-forja.firebaseapp.com",
  projectId: "metodo-forja",
  storageBucket: "metodo-forja.appspot.com",
  messagingSenderId: "947913980634",
  appId: "1:947913980634:web:5c105bfbe082821ea86a6b",
  measurementId: "G-6Z9ELJY5LZ"
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
    await addDoc(collection(db, "codigos_acesso"), {
      codigo: code,
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
};
