let calculator = {
  a: 0,
  b: 0,
  
  read() {
      this.a = Number(document.getElementById('numA').value);
      this.b = Number(document.getElementById('numB').value);
  },
  
  sum() {
      return this.a + this.b;
  },
  
  mul() {
      return this.a * this.b;
  }
};

function showResult(value) {
  document.getElementById('result').textContent = `Result: ${value}`;
}