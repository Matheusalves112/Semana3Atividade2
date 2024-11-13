const tamanho = prompt('Digite o tamanho da lista de números'); //variavel que guarda o valor e aplica o tamanho da lista de numeros
const lista = new Array(tamanho).fill(null);
lista // variavel que usa o new array e imprime o tamanho da lista
 .map(function (item, index) {
   return index + 1;
 }) // usando o metodo map e usa o aroow function que usa os elementos item e index e retorna o valor index
 .reduce(function (acumulador, item) {
   return acumulador * item;
 }); // usando o metodo reduce e function e retorna a variavel acumulador + item


new Array(tamanho)
 .fill(null)
 .map((item, index) => index + 1)
 .reduce((acumulador, item) => acumulador + item);
// usando o novo array para a variavel tamanho, usando fill para a variavel null
// metodo map para a variavel item e index maior igual acumulador + item usando o reduce