import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_MESSAGING_ID",
  appId: "SEU_APP_ID"
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