function Calculator() {
  this.read = function() {
      this.a = Number(document.getElementById('num1').value);
      this.b = Number(document.getElementById('num2').value);
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
  try {
      const result = operation === 'sum' ? calculator.sum() : calculator.mul();
      resultElement.textContent = `Result: ${result}`;
      resultElement.style.color = '#333';
  } catch (error) {
      resultElement.textContent = 'Please enter valid numbers first!';
      resultElement.style.color = 'red';
  }
}