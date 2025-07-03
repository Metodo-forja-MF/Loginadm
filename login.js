import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKtKrRP4j4lHUcdeEdylTI2C9hWd5y7no",
  authDomain: "metodo-forja.firebaseapp.com",
  projectId: "metodo-forja",
  storageBucket: "metodo-forja.appspot.com",
  messagingSenderId: "949791938063",
  appId: "1:949791938063:web:5c0185bfbe082821ea86ab",
  measurementId: "G-6Z92ELJ5LZ"
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
    .catch((error) => {
      errorEl.textContent = "Credenciais inválidas.";
      console.error("Erro no login:", error.message);
    });
}

window.login = login;
