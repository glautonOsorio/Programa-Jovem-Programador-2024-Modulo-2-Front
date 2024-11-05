/*
let num = Number(window.prompt("Digite um numerso"))


if (num % 2 === 0) {
    alert("Numero é um par")
} else {
    alert("Numero é um impar") 
}

if (num >=1000) {
    alert("Excelente")
} else if(num >= 500){
    alert("Bom")
}
else {
    alert("Ruim") 
}
*/
let num = Number(window.prompt("Digite a sua primeira nota"));
let num2 = Number(window.prompt("Digite a sua segunda nota"));
let num3 = Number(window.prompt("Digite a sua terceira nota"));

let result = (num + num2 + num3) / 3
let decision;

if (result >= 7 && result <= 10) {
  decision = "Aprovado";
} else if (result >= 5 && result <= 6.9) {
  decision = "Recuperação";
} else {
  decision = "Reprovado";
}

document.write(
    `<h1>Olá aluno, suas notas foram ${num}, ${num2} e ${num3}. A média foi de ${result.toFixed(1)}. Com isso, o resultado final é: <strong>${decision}</strong>.</h1>`);
