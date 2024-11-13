const letras = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
   ];
// variavel para guardar os valores da lista letras e imprimir os valores a, b, c, d, e, f, g   
   
   let resultado = letras.flat().reduce((objeto, numero) => {
    if (objeto[numero]) {
      objeto[numero] += 1;
    } else {
      objeto[numero] = 1;
    }
    return objeto;
   }, {});
   // usando a função let para achar o resultado usando o metodo flat e reduce para achar um obejto numero += a 1
   // usando as funções if e else e retornar o objeto para imprimir os valores certos das variaveis