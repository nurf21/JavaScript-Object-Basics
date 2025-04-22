function Calculator() {
  this.read = function () {
    this.a = Number(document.getElementById('num1').value);
    this.b = Number(document.getElementById('num2').value);
    if (isNaN(this.a) || isNaN(this.b)) {
      throw new Error('Invalid input');
    }
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