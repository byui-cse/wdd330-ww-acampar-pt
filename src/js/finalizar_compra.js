import { carregarHeaderFooter } from "./uteis.mjs";
import ProcessoFinalizacaoCompra from "./ProcessoFinalizacaoCompra.mjs";

carregarHeaderFooter();

const pedido = new ProcessoFinalizacaoCompra("so-carrinho", ".finalizar_compra-resumo");
pedido.inicializar();

// Adiciona os ouvintes de evento para disparar calcularTotalPedido quando o usuário alterar o CEP
document
  .querySelector("#cep")
  .addEventListener("blur", pedido.calcularTotalPedido.bind(pedido));

// ouvindo o clique no botão
document.querySelector("#finalizarCompraEnviar").addEventListener("click", (e) => {
  e.preventDefault();

  pedido.finalizarCompra();
});
