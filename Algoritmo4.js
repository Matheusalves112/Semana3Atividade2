const funcionarios = [
    { nome: 'João', salario: 30000, departamento: 'TI' },
    { nome: 'Janete', salario: 70000, departamento: 'RH' },
    { nome: 'Sofia', salario: 100000, departamento: 'RH' },
   ];
   // guardar os valores usando o const para imprimir na lista o nome, salario e departamento
   const funcionariosPorDepartamento = funcionarios.reduce(
    (acumulador, funcionario) => {
      const departamento = funcionario.departamento;
      if (!acumulador[departamento]) {
        acumulador[departamento] = [];
      }
      acumulador[departamento].push(funcionario);
      return acumulador;
    },
    {},
   ); 
   //usa o reduce para acumular o numero de funcionarios se é maior igual ao departamento e a variavel funcionario.departamento
   // usando if para achar os valores reais
   // e retorna o valor da variavel acumulador
   // tem o uso do .push
   const mediasSalarioPorDepartamento = Object.keys(
    funcionariosPorDepartamento,
   ).map((departamento) => {
    const total = funcionariosPorDepartamento[departamento].reduce(
      (acumulador, funcionario) => acumulador + funcionario.salario,
      0,
    );
    return {
      departamento: departamento,
      media: total / funcionariosPorDepartamento[departamento].length,
    };
   });
   // usando const na variavel pra media dos salarios por departamento usando o reduce para achar o valor real
   // retorna a media total dividido pela variavel funcionario por departamento
   
   const maioresPagamentos = mediasSalarioPorDepartamento.filter(
    (departamento) => departamento.media > 65000,
   );
   // usa o filter para o valor x que é 65000