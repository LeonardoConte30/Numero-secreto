function exibirTextoNaTela() {
    console.log('Olá mundo')
}
 
function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
  }
  
  exibirNome("Leo");

  function calcularDobro(numero) {
    return numero * 2;
  }
  
  let resultadoDobro = calcularDobro(5);
  console.log(resultadoDobro);

  function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let media = calcularMedia(4, 7, 10);
  console.log(media);

  function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado1 = quadrado(2);
  console.log(resultado1); 







  // ATIVIDADES 'REINICIANDO O JOGO'


  
function calculaIMC(altura, peso){

  let imc = peso / (alturaMetros * alturaMetros);
}






function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Exemplo de uso
let numero2 = 5;
let resultado = calcularFatorial(numero2);
console.log(`O fatorial de ${numero2} é ${resultado}`);






function converterDolarParaReal(valorEmDolar) {
  let cotacaoDolar = 4.80;
  let valorEmReais = valorEmDolar * cotacaoDolar;
  return valorEmReais.toFixed(2);
}

// Exemplo de uso
let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);





function calcularAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  
  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}

// Exemplo de uso
let altura = 3; // em metros
let largura = 5; // em metros
calcularAreaPerimetroSalaRetangular(altura, largura);






function calcularAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;
  
  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

// Exemplo de uso
let raio = 4; // em metros
calcularAreaPerimetroSalaCircular(raio);






function mostrarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

// Exemplo de uso
let numero = 7;
mostrarTabuada(numero);



//ATIVIDADES DE ARRAY

let listaGenerica = [];

let LinguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];
LinguagensDeProgramacao.push['Java','Ruby','GoLang'];

let nomes = ['Leo','Marcus','Fellip'];
console.log(nomes[0]);

let nomes1 = ['Leo','Marcus','Fellip'];
console.log(nomes1[1]);

let nomes2 = ['Leo','Marcus','Fellip'];
console.log(nomes2[2]);