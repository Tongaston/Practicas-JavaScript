class Display {
  constructor(displayPreviousValue, displayActualValue) {
    this.displayPreviousValue = displayPreviousValue;
    this.displayActualValue = displayActualValue;
    this.calculator = new Calculator();
    this.operationType = undefined;
    this.actualValue = '';
    this.previousValue = '';
    this.signs = {
        sum: '+',
        substraction: '-',
        multiplication: 'x', 
        division: '%'
    }
  }

  deleteAll() {
    this.actualValue = '';
    this.previousValue = '';
    this.operationType = undefined;
    this.showValues();
  }

  delete() {
    this.actualValue = this.actualValue.toString().slice(0, -1);
    this.showValues();
  }

  compute(type) {
    this.operationType !== 'equal' && this.calculate();
    this.operationType = type;
    this.previousValue = this.actualValue || this.previousValue;
    this.actualValue = '';
    this.showValues();
  }

  numAdd(num) {
    if (num === '.' && this.actualValue.includes('.')) return;
    this.actualValue = this.actualValue.toString() + num.toString();
    this.showValues();
  }

  showValues() {
    this.displayActualValue.textContent = this.actualValue;
    this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.operationType] || ''}`;
  }

  calculate() {
    const previousValue = parseFloat(this.previousValue);
    const actualValue = parseFloat(this.actualValue);

    if (isNaN(actualValue) || isNaN(previousValue)) return;
    this.actualValue = this.calculator[this.operationType](
      previousValue,
      actualValue
    );
  }
}
