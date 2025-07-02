import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
const db = getFirestore(app);

// Função para gerar código aleatório
function gerarCodigoAleatorio(tamanho = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let codigo = '';
  for (let i = 0; i < tamanho; i++) {
    codigo += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return codigo;
}

// DOM Elements
const botaoGerar = document.getElementById("gerarCodigo");
const textoCodigo = document.getElementById("codigoGerado");
const modalErro = document.getElementById("modalErro");
const fecharModal = document.getElementById("fecharModal");

botaoGerar.addEventListener("click", async () => {
  const codigo = gerarCodigoAleatorio();

  try {
    await addDoc(collection(db, "codigos"), {
      codigo,
      criadoEm: serverTimestamp(),
      usado: false
    });

    textoCodigo.textContent = `Código gerado: ${codigo}`;
  } catch (error) {
    console.error("Erro ao gravar código:", error);
    modalErro.style.display = "block";
  }
});

fecharModal.addEventListener("click", () => {
  modalErro.style.display = "none";
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
