let option = Number(
  window.prompt(
    "Opção 1 - Calcular tempo percorrido, Opção 2 - Informar qual dos 3 numeros é o maior, Opção 3 - Informar qual dos 3 numeros é o menor"
  )
);

function calcularTempo() {
  
  let distancia = Number(window.prompt("Qual a distancia?"));
  let velocidade = Number(window.prompt("Qual a velocidade?"));

  let result = distancia / velocidade

  if (velocidade <= 0) {
    alert("A velocidade precisa ser maior que zero")
    
  } else {
    alert("O tempor percorrido é: " + result.toFixed(1)  + " horas")
    
  }
}

function calcularMaiorNumero() {
  let num1 = Number(window.prompt("Qual o primeiro numero?"));
  let num2 = Number(window.prompt("Qual o segundo numero?"));
  let num3 = Number(window.prompt("Qual o terceiro numero?"));

  if (num1 > num2 && num1 > num3) {
    alert("Numero 1 é o maior numero: " + num1);
  } else if (num2 > num1 && num2 > num3) {
    alert("Numero 2 é o maior numero: " + num2);
  } else {
    alert("Numero 3 é o maior numero: " + num3);
  }
}
function calcularMenorNumero() {
  let num1 = Number(window.prompt("Qual o primeiro numero?"));
  let num2 = Number(window.prompt("Qual o segundo numero?"));
  let num3 = Number(window.prompt("Qual o terceiro numero?"));

  if (num1 < num2 && num1 < num3) {
    alert("Numero 1 é o menor numero: " + num1);
  } else if (num2 < num1 && num2 < num3) {
    alert("Numero 2 é o menor numero: " + num2);
  } else {
    alert("Numero 3 é o menor numero: " + num3);
  }
}

switch (option) {
  case 1:
    calcularTempo();
    break;
  case 2:
    calcularMaiorNumero();
    break;
  case 3:
    calcularMenorNumero();
    break;

  default:
    alert("Nenhuma das opções escolhidas");
    break;
}
