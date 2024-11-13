const estudantes = [
    { nome: 'Alice', notas: [100, 60, 92] },
    { nome: 'João', notas: [75, 30, 85] },
    { nome: 'Charles', notas: [90, 95, 85] },
    { nome: 'Paulo', notas: [100, 100, 100] },
   ];
  // guardar os valores da lista estudante usando o const para saida dos valores serem imprimidos em nome e notas 
   
   const estudantesMedias = estudantes.map((estudante) => {
    const total = estudante.notas.reduce((soma, nota) => soma + nota);
    let {nome} = estudante;
    return { nome, media: total / estudante.notas.length };
   });
   
   // usando o metodo map: guardar os valores das variaveis para achar o resultado de media dos estudantes e estudantes
   // alem de saber o valor total da soma da nota e retornar a media total de notas dos estudantes
   const melhoresMedias = estudantesMedias.filter(
    (student) => student.media > 90,
   );
   // usando o metodo filter usa pra filtrar o resultado da media maior que 90