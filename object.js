let user = {
  name: 'John',
  surname: 'Smith'
};

Object.assign(user, { name: 'Pete' });
delete user.name;

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

let schedule = {};
console.log(isEmpty(schedule));
Object.assign(schedule, { "8:30": "get up" });
console.log(isEmpty(schedule));

// Calculate the average of an object's values
function calculateAverage(obj) {
  const sum = Object.values(obj).reduce((acc, value) => acc + value, 0);
  return sum / Object.keys(obj).length;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = Object.values(salaries).reduce((acc, value) => acc + value, 0);
const average = calculateAverage(salaries);
console.log(average);

function multiplyNumeric(obj) {
  for (let key in obj) if (typeof obj[key] === 'number') obj[key] *= 2;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();

// Merge two objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj);

let sharedObject = {}; // Common object stored externally

function A() {
  return sharedObject; // Returns the shared object instead of new instance
}

function B() {
  return sharedObject; // Returns the same shared object
}

let a = new A();
let b = new B();

console.log(a == b); // true (both reference the same object)