import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKtKrRP4AjLHcdeEdy1TZC9nHWdv5y7n0",
  authDomain: "metodo-forja.firebaseapp.com",
  databaseURL: "https://metodo-forja-default-rtdb.firebaseio.com",
  projectId: "metodo-forja",
  storageBucket: "metodo-forja.appspot.com",
  messagingSenderId: "949791380634",
  appId: "1:949791380634:web:5c015b5fbe082821ea86ab",
  measurementId: "G-6Z92LJY5LZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.gerarCodigo = async function () {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
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
