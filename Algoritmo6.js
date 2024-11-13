const cidades = ["Guarabira", "Belém", "Sapé"];

// usando o metodo filter pra filtrar a listar cidades que tenham mais de 4 caracteres valor maximo
const cidadesFiltradas = cidades.filter(cidade => cidade.length > 4);

// usa o reduce para construir um html
const listaHTML = cidadesFiltradas.reduce((html, cidade) => {
  return html + `<li>${cidade}</li>`;
}, "");

// retorna a estrutura da lista ordenada
const htmlCompleto = `<ol>${listaHTML}</ol>`;

console.log(htmlCompleto);
// aqui o resultado final