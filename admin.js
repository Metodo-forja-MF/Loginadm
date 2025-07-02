
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, setDoc, doc, Timestamp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.gerarCodigo = async function () {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ23456789';
  let codigo = 'FORJA-';
  for (let i = 0; i < 6; i++) {
    codigo += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  try {
    await setDoc(doc(db, "codigos_acesso", codigo), {
      usado: false,
      email: "",
      criadoEm: Timestamp.now()
    });
    
    document.getElementById("codigo-container").innerText = codigo;
  } catch (e) {
    console.error("Erro ao adicionar documento: ", e);
  }
};
