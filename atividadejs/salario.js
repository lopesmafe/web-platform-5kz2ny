function calcMedia() {
  var salarios =  parseInt(prompt("Informe a quantidade de salários: "));
  var vetor = new Array(salarios);

  for(let count=0; count<salarios; count++)
  vetor[count] = parseInt( prompt("Salario" + (count+1) + ":") )
  
  var soma=0;
  for(let count in vetor)
  soma += vetor[count];

  var media = soma/salarios;
  document.write("Média do salario: " + media)}