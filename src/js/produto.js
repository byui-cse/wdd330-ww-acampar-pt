import { definirArmazenamentoLocal } from "./uteis.mjs";
import DadosProduto from "./DadosProduto.mjs";

const fonteDados = new DadosProduto("barracas");

function adicionarProdutoAoCarrinho(produto) {
  definirArmazenamentoLocal("so-carrinho", produto);
}

// manipulador de evento do botão adicionar ao carrinho
async function manipuladorAdicionarAoCarrinho(e) {
  const produto = await fonteDados.buscarProdutoPorId(e.target.dataset.id);
  adicionarProdutoAoCarrinho(produto);
}

// adiciona ouvinte ao botão Adicionar ao Carrinho
document
  .getElementById("adicionarAoCarrinho")
  .addEventListener("click", manipuladorAdicionarAoCarrinho);
