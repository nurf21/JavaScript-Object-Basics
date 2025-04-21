const calculator = {
  numA: null,
  numB: null,
  read: function() {
    this.numA = parseFloat(document.getElementById('numA').value);
    this.numB = parseFloat(document.getElementById('numB').value);
  },
  sum: function() {
    return this.numA + this.numB;
  },
  mul: function() {
    return this.numA * this.numB;
  }
};

const readBtn = document.getElementById('read-btn');
const sumBtn = document.getElementById('sum-btn');
const mulBtn = document.getElementById('mul-btn');
const resultDiv = document.getElementById('result');

readBtn.addEventListener('click', calculator.read);
sumBtn.addEventListener('click', () => {
  calculator.read();
  resultDiv.innerText = `Sum: ${calculator.sum()}`;
});
mulBtn.addEventListener('click', () => {
  calculator.read();
  resultDiv.innerText = `Multiply: ${calculator.mul()}`;
});