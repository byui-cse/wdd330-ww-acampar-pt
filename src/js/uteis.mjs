// uteis.mjs

// atalho para querySelector... retorna o elemento correspondente
export function seletorRapido(seletor, pai = document) {
  return pai.querySelector(seletor);
}
// ou uma versão mais concisa se você gostar desse tipo de coisa:
// export const seletorRapido = (seletor, pai = document) => pai.querySelector(seletor);

// recupera dados do armazenamento local (localStorage)
export function obterArmazenamentoLocal(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

// salva dados no armazenamento local (localStorage)
export function definirArmazenamentoLocal(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
}

// configura um ouvinte tanto para touchend quanto para click
export function definirClique(seletor, funcaoRetorno) {
  seletorRapido(seletor).addEventListener("touchend", (evento) => {
    evento.preventDefault();
    funcaoRetorno();
  });
  seletorRapido(seletor).addEventListener("click", funcaoRetorno);
}