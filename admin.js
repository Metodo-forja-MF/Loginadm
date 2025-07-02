import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLHFGuk6d20MPTt3u9UBrC60SDPY9sdyM",
  authDomain: "metodo-forja.firebaseapp.com",
  projectId: "metodo-forja",
  storageBucket: "metodo-forja.appspot.com",
  messagingSenderId: "660887130595",
  appId: "1:660887130595:web:82dcfa0e8da79de44b6718"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const gerarCodigoBtn = document.getElementById("gerarCodigoBtn");
const codigoResultado = document.getElementById("codigoResultado");
const modalErro = document.getElementById("modalErro");

function gerarCodigo() {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  let codigo = "";
  for (let i = 0; i < 3; i++) {
    codigo += letras.charAt(Math.floor(Math.random() * letras.length));
  }
  codigo += "-";
  for (let i = 0; i < 3; i++) {
    codigo += numeros.charAt(Math.floor(Math.random() * numeros.length));
  }
  return codigo;
}

async function salvarCodigoFirestore(codigo) {
  try {
    await addDoc(collection(db, "codigos"), {
      codigo,
      criadoEm: serverTimestamp(),
      usado: false
    });
    console.log("Código salvo:", codigo);
    codigoResultado.textContent = `Código gerado: ${codigo}`;
  } catch (error) {
    console.error("Erro ao gravar código no Firestore:", error.code, error.message);
    modalErro.style.display = "block";
  }
}

gerarCodigoBtn.addEventListener("click", () => {
  const codigo = gerarCodigo();
  salvarCodigoFirestore(codigo);
});

window.fecharModal = function () {
  modalErro.style.display = "none";
};