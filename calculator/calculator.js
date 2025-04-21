const calculator = {
  numA: null,
  numB: null,
  read: function() {
    this.numA = parseFloat(document.getElementById('numA').value);
    this.numB = parseFloat(document.getElementById('numB').value);
  },
  calculate: function(operation) {
    switch (operation) {
      case 'sum':
        return this.numA + this.numB;
      case 'mul':
        return this.numA * this.numB;
      default:
        throw new Error('Invalid operation');
    }
  }
};

const sumBtn = document.getElementById('sum-btn');
const mulBtn = document.getElementById('mul-btn');
const resultDiv = document.getElementById('result');

sumBtn.addEventListener('click', () => {
  calculator.read();
  resultDiv.innerText = `Sum: ${calculator.calculate('sum')}`;
});
mulBtn.addEventListener('click', () => {
  calculator.read();
  resultDiv.innerText = `Multiply: ${calculator.calculate('mul')}`;
});