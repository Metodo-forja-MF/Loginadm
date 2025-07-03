import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBKtKrRP4AjLHcdeEdyTlT2C9nHdV5y7n0",
  authDomain: "metodo-forja.firebaseapp.com",
  projectId: "metodo-forja",
  storageBucket: "metodo-forja.appspot.com",
  messagingSenderId: "949791398063",
  appId: "1:949791398063:web:5c015b5fbe082821ea86ab",
  measurementId: "G-6Z9ELJY5LZ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função de login
export function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorEl = document.getElementById('loginError');

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "painel.html";
    })
    .catch((error) => {
      console.error("Erro no login:", error);
      errorEl.textContent = "Credenciais inválidas.";
    });
}

// Disponibiliza a fun
