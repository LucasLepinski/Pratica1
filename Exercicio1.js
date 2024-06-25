const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMDC(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function calcularMMC(a, b) {
  return Math.abs(a * b) / calcularMDC(a, b);
}

function main() {
  rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
      const a = parseInt(num1);
      const b = parseInt(num2);

      if (isNaN(a) || isNaN(b)) {
        console.log('Por favor, insira números válidos.');
      } else {
        const mdc = calcularMDC(a, b);
        const mmc = calcularMMC(a, b);

        console.log(`O MDC de ${a} e ${b} é: ${mdc}`);
        console.log(`O MMC de ${a} e ${b} é: ${mmc}`);
      }

      rl.close();
    });
  });
}

main();