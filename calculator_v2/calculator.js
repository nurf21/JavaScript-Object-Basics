function Calculator() {
  this.read = function () {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    if (isNaN(Number(num1)) || isNaN(Number(num2))) {
      throw new Error('Invalid input');
    }
    this.a = Number(num1);
    this.b = Number(num2);
  };

  this.calculate = function (operation) {
    switch (operation) {
      case 'sum':
        return this.a + this.b;
      case 'mul':
        return this.a * this.b;
      default:
        throw new Error('Unsupported operation');
    }
  };
}

const calculator = new Calculator();

function showResult(operation) {
  const resultElement = document.getElementById('result');
  calculator.read();
  try {
    const result = calculator.calculate(operation);
    resultElement.textContent = `Result: ${result}`;
    resultElement.style.color = '#333';
  } catch (error) {
    resultElement.textContent = error.message;
    resultElement.style.color = 'red';
  }
}