
import { db } from './firebaseConfig';
import { collection, setDoc, doc, serverTimestamp } from 'firebase/firestore';

function gerarStringAleatoria(tamanho) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let resultado = '';
  for (let i = 0; i < tamanho; i++) {
    resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return resultado;
}

async function gerarCodigo() {
  const codigo = gerarStringAleatoria(8);

  try {
    // Agora o código será o ID do documento!
    await setDoc(doc(db, 'codigos_acesso', codigo), {
      criadoEm: serverTimestamp(),
      usado: false
    });

    alert(`Código gerado com sucesso: ${codigo}`);
  } catch (erro) {
    console.error('Erro ao gerar código:', erro);
    alert('Erro ao gerar código. Verifique o console.');
  }
}
