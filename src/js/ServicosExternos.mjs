const baseURL = import.meta.env.VITE_SERVER_URL;

async function converterParaJson(res) {
  // converte o corpo da resposta para JSON antes de verificar se está ok
  const respostaJson = await res.json();
  if (res.ok) {
    return respostaJson;
  } else {
    // envia o corpo da resposta para quem chamou, com as mensagens do servidor
    throw { name: "erroServicos", message: respostaJson };
  }
}

export default class ServicosExternos {
  constructor() {
    // this.categoria = categoria;
    // this.caminho = `../publico/json/${this.categoria}.json`;
  }
  async obterDados(categoria) {
    const response = await fetch(`${baseURL}produtos/busca/${categoria}`);
    const dados = await converterParaJson(response);

    return dados.Result;
  }
  async buscarProdutoPorId(id) {
    const response = await fetch(`${baseURL}produto/${id}`);
    const dados = await converterParaJson(response);
    // console.log(dados.Result);
    return dados.Result;
  }

  async finalizar_compra(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(`${baseURL}finalizar-compra/`, options).then(converterParaJson);
  }
}