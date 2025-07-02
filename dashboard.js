import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SUA_AUTH_DOMAIN",
  projectId: "SUA_PROJECT_ID",
  storageBucket: "SUA_BUCKET",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
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
