
function gerarCodigoAleatorio(tamanho) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let codigo = "";
  for (let i = 0; i < tamanho; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres.charAt(randomIndex);
  }
  return codigo;
}

function gerarCodigoUnico() {
  const codigo = gerarCodigoAleatorio(8);
  const docRef = db.collection("codigos_acesso").doc(codigo);

  docRef.set({ usado: false })
    .then(() => {
      document.getElementById("codigo").innerText = "Código gerado: " + codigo;
    })
    .catch((error) => {
      console.error("Erro ao gerar código:", error);
    });
}
