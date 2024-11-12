/*
let num = Number(window.prompt("Digite a sua primeira nota"));
let num2 = Number(window.prompt("Digite a sua segunda nota"));
let num3 = Number(window.prompt("Digite a sua terceira nota"));

let result = (num + num2 + num3) / 3;
let decision;
if (result >= 7 && result <= 10) {
  decision = "Aprovado";
} else if (result >= 5 && result <= 6.9) {
  decision = "Recuperação";
} else {
  decision = "Reprovado";
}

document.write(
  `<h1>Olá aluno, suas notas foram ${num}, ${num2} e ${num3}. A média foi de ${result.toFixed(
    1
  )}. Com isso, o resultado final é: <strong>${decision}</strong>.</h1>`
);

let valorVenda = window.prompt("Digite o valor da venda");
let bonus;

if (valorVenda >= 1000) {
  bonus = valorVenda * 0.2;
} else if (valorVenda <= 5000) {
  bonus = valorVenda * 0.25;
} else {
  bonus = valorVenda * 0.30;
}


document.write(
  `<h2>O valor da venda é ${valorVenda} e o bonus foi de ${bonus}</h2>`
);*/

let option = Number(
  window.prompt(
    "Opção 1 - Calcular Média, Opção 2 - Calcular Comissão, Opção 3 - Calcular ano Bissexto"
  )
);

function calcularMedia(n1, n2, n3) {
  let num = (n1 + n2 + n3) / 3;
  return num.toFixed(1);
}

function decisao(num) {
  if (num >= 7 && num <= 10) {
    return "Aprovado";
  } else if (num >= 5 && num <= 6.9) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

function bonusCalc(num) {
  if (num >= 1000) {
    return num * 0.2;
  } else if (num <= 5000) {
    return num * 0.25;
  } else {
    return num * 0.3;
  }
}

function calcularComissao() {
  let valorVenda = Number(window.prompt("Digite o valor da venda"));
  let bonus = bonusCalc(valorVenda);

  document.write(
    `<h2>O valor da venda é ${valorVenda.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })} e o bônus foi de ${bonus.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}</h2>`
  );
}

function calcularNota() {
  let num = Number(window.prompt("Digite a sua primeira nota"));
  let num2 = Number(window.prompt("Digite a sua segunda nota"));
  let num3 = Number(window.prompt("Digite a sua terceira nota"));

  let result = calcularMedia(num, num2, num3);
  let decision = decisao(result);

  document.write(
    `<h1>Olá aluno, suas notas foram ${num}, ${num2} e ${num3}. A média foi de ${result}. Com isso, o resultado final é: <strong>${decision}</strong>.</h1>`
  );
  return;
}
function calcBissexto(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}

function calcularAno() {
  let ano = Number(window.prompt("Digite um ano:"));

  let resultado = calcBissexto(ano);

  if (resultado) {
    document.write(`<h1>O ano ${ano} é Bissexto</h1>`);
  } else {
    document.write(`<h1>O ano ${ano} não é Bissexto</h1>`);
  }
}
switch (option) {
  case 1:
    calcularNota();
    break;
  case 2:
    calcularComissao();
    break;
  case 3:
    calcularAno();
    break;

  default:
    alert("Nenhuma das opções escolhidas");
    break;
}
