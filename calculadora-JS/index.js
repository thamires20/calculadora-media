
var valor;
var valor1;
var oper;
var readlineSync = require("readline-sync");
oper = readlineSync.question(
  "Qual operacao deseja efetuar (+) (-) (*) (/)? : \n"
);
valor = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
valor1 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));

function doOperation(operator, value1, value2) {
  if (operator == "+") {
    return value1 + value2;
  } else if (operator == "-") {
    return value1 - value2;
  } else if (operator == "*") {
    return value1 * value2;
  } else if (operator == "/") {
    return value1 / value2;
  } else {
    ("");
    throw new Error("Operação inválida");
  }
}

console.log("O resultado é", doOperation(oper, valor, valor1));


var readlineSync = require("readline-sync"),
  animals = ["Lion", "Elephant", "Crocodile", "Giraffe", "Hippo"],
  index = readlineSync.keyInSelect(animals, "Which animal?");
console.log("Ok, " + animals[index] + " goes to your room.");









const alunoNota = 10;

const alunoNota2 = 5;

const alunoNota3 = 5;

const alunoNota4 = 5;

function alunoMedia() {
  const soma = alunoNota + alunoNota2 + alunoNota3 + alunoNota4;

  const totalSoma = soma / 4;
  return totalSoma;
}

const totalSoma = alunoMedia();

if (totalSoma > 6) {
  console.log("voce passou!");
} else if (totalSoma < 6 > 4) {
  console.log("voce nao passou!");
  console.log("voce esta de recuperaçao!");
} else if (totalSoma < 4) {
  console.log("voce esta reprovado");
}
