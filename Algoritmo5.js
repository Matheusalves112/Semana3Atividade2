const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

// Concatena as listas e realiza a soma usando filter e reduce
// lista com os valores para somar
const sum = a.concat(b)
  .filter(value => typeof value === 'number') // Filtra apenas os valores numéricos, caso necessário
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// usando os metodos filter e reduce para achar os valores reais
console.log(sum); // Resultado: 55
