function Calculator() {
  this.read = function() {
    this.a = Number(document.getElementById('num1').value);
    this.b = Number(document.getElementById('num2').value);
    if (isNaN(this.a) || isNaN(this.b)) {
      throw new Error('Invalid input');
    }
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

const calculator = new Calculator();

function showResult(operation) {
  const resultElement = document.getElementById('result');
  calculator.read();
  try {
    const result = operation === 'sum' ? calculator.sum() : calculator.mul();
    resultElement.textContent = `Result: ${result}`;
    resultElement.style.color = '#333';
  } catch (error) {
    resultElement.textContent = error.message;
    resultElement.style.color = 'red';
  }
}