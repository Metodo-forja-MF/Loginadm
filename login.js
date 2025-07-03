import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
const auth = getAuth(app);

export function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorEl = document.getElementById('loginError');

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "painel.html";
    })
    .catch(() => {
      errorEl.textContent = "Credenciais inválidas.";
    });
}

window.login = login;
