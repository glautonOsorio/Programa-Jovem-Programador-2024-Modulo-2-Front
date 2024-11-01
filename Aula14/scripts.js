/*
let nome = window.prompt("Olá amiguinho qual o seu nome?")
let curso = window.prompt("Olá amiguinho qual o nome do seu curso?")
let inicio = window.prompt("Olá amiguinho qual a data de inicio")
let conclusao = window.prompt("Olá amiguinho qual a data de conclusao?")
let professor = window.prompt("Olá amiguinho qual o nome do seu professor?")

document.write(`<h3>Olá ${nome} o seu curso é de ${curso}, ele iniciou em ${inicio} e ira terminar em ${conclusao} e o professor é ${professor}</h1>`)

let n1 = Number(window.prompt("Digite o 1 numero:"))
let n2 = Number(window.prompt("Digite o 2 numero:"))
let n3 = Number(window.prompt("Digite o 3 numero:"))

let result;
result = n1**n2%n3; 
document.write(`O resultado numero 1 é ${result} <br>`)

result = n1*n2/n1%n3; 
document.write(`O resultado numero 2 é ${result} <br>`)
*/
let salario = Number(window.prompt("Qual o valor do seu Salário:"))
document.write(`O valor do salario é ${salario.toFixed(2).replace('.',',')} <br>`)
document.write(`O valor do salário é ${salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} <br>`);
console.log(salario++);

