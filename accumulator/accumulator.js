let accumulator;

function initializeAccumulator() {
  const startInput = document.getElementById('startValue');
  const value = parseFloat(startInput.value);

  if (isNaN(value)) {
    showError('Please enter a valid starting value');
    return;
  }

  accumulator = new Accumulator(value);
  updateDisplay();
  clearError();
  startInput.value = '';
}

function addValue() {
  if (!accumulator) {
    showError('Please initialize first');
    return;
  }

  const addInput = document.getElementById('addValue');
  const value = parseFloat(addInput.value);

  if (isNaN(value)) {
    showError('Please enter a valid number to add');
    return;
  }

  accumulator.read(value);
  updateDisplay();
  clearError();
  addInput.value = '';
}

function showTotal() {
  if (accumulator) {
    alert(`Total Accumulated Value: ${accumulator.value}`);
  } else {
    showError('Accumulator not initialized');
  }
}

function resetAccumulator() {
  accumulator = null;
  updateDisplay();
  clearError();
  document.getElementById('startValue').value = '';
  document.getElementById('addValue').value = '';
}

function updateDisplay() {
  if (accumulator) {
    document.getElementById('currentValue').textContent =
      `Current Value: ${accumulator.value}`;
  } else {
    document.getElementById('currentValue').textContent = 'Current Value: 0';
  }
}

function showError(message) {
  document.getElementById('error').textContent = message;
}

function clearError() {
  document.getElementById('error').textContent = '';
}

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function (value) {
    this.value += value;
  };
}