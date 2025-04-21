let user = {
  name: 'John',
  surname: 'Smith'
};

user.name = 'Pete';
delete user.name;

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = Object.values(salaries).reduce((acc, value) => acc + value, 0);

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