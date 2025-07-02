
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  // 🔐 Substitua isso com sua própria config do Firebase
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function gerarCodigoAleatorio(tamanho) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let resultado = "";
  for (let i = 0; i < tamanho; i++) {
    resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return resultado;
}

async function gerarCodigo() {
  const codigo = gerarCodigoAleatorio(8);

  try {
    await setDoc(doc(db, "codigos_acesso", codigo), {
      codigo: codigo,
      criadoEm: serverTimestamp(),
      usado: false
    });
    alert(`Código gerado: ${codigo}`);
  } catch (erro) {
    console.error("Erro ao gerar código:", erro);
    alert("Erro ao gerar código. Verifique o console.");
  }
}

document.getElementById("gerarCodigo").addEventListener("click", gerarCodigo);
