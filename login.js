import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKtKrRP4AjLHcdeEdy1TZC9nHWdv5y7n0",
  authDomain: "metodo-forja.firebaseapp.com",
  projectId: "metodo-forja",
  storageBucket: "metodo-forja.appspot.com",
  messagingSenderId: "949791380634",
  appId: "1:949791380634:web:5c015b5fbe082821ea86ab",
  measurementId: "G-6Z92LJY5LZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function login() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const errorEl = document.getElementById('loginError');

  if (email === 'admberti@forja.com' && password === '%Wesley99132395') {
    window.location.href = 'painel.html';
  } else {
    errorEl.textContent = 'Credenciais inválidas.';
  }
}

window.login = login;
gin;
