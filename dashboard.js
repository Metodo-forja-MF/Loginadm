import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKtKrRP4AjLHcdeEdyTlTZC9hHdv5y7no",
  authDomain: "metodo-forja.firebaseapp.com",
  databaseURL: "https://metodo-forja-default-rtdb.firebaseio.com",
  projectId: "metodo-forja",
  storageBucket: "metodo-forja.appspot.com",
  messagingSenderId: "949719386034",
  appId: "1:949719386034:web:5c015b5fbe082821ea86ab",
  measurementId: "G-6Z9EJLY5LZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function gerarCodigoAleatorio(tamanho = 8) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let resultado = "";
  for (let i = 0; i < tamanho; i++) {
    resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return resultado;
}

async function gerarCodigo() {
  const codigo = gerarCodigoAleatorio();

  try {
    await setDoc(doc(db, "codigos_acesso", codigo), {
      codigo,
      criadoEm: serverTimestamp(),
      usado: false
    });

    const codigoEl = document.getElementById("codigoGerado");
    codigoEl.textContent = `Código gerado: ${codigo}`;
    alert(`Código gerado com sucesso: ${codigo}`);
  } catch (erro) {
    console.error("Erro ao gravar no Firestore:", erro);
    alert("Erro ao gravar código no Firestore.");
  }
}

const botao = document.getElementById("gerarCodigo");
if (botao) {
  botao.addEventListener("click", gerarCodigo);
}
