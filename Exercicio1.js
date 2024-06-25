const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMDC(a, b) {

  if (b === 0) {
    return a;
  }
  return calcularMDC(b, a % b);
}

function calcularMMC(a, b) {

  return Math.abs(a * b) / calcularMDC(a, b);
}

function main() {
  rl.question('Digite o primeiro número inteiro: ', (num1) => {
    rl.question('Digite o segundo número inteiro: ', (num2) => {

      num1 = parseInt(num1);
      num2 = parseInt(num2);


      let mmc = calcularMMC(num1, num2);


      console.log(`O MMC de ${num1} e ${num2} é: ${mmc}`);

      rl.close();
    });
  });
}

main();
