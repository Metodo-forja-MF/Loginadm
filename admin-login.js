import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKtKrRP4AjLHcdeEdyTlTZC9hHdv5y7no",
  authDomain: "metodo-forja.firebaseapp.com",
  databaseURL: "https://metodo-forja-default-rtdb.firebaseio.com",
  projectId: "metodo-forja",
  storageBucket: "metodo-forja.firebasestorage.app",
  messagingSenderId: "949719386034",
  appId: "1:949719386034:web:5c015b5fbe082821ea86ab",
  measurementId: "G-6Z9EJLY5LZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = async function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  try {
    await signInWithEmailAndPassword(auth, email, senha);
    mensagem.innerText = "Login bem-sucedido! Redirecionando...";
    setTimeout(() => {
      window.location.href = "admin.html";
    }, 1000);
  } catch (error) {
    mensagem.innerText = "Erro no login: " + error.message;
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "admin.html";
  }
});
