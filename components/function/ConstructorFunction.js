// Constructior Function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Instantiate Object
const person1 = new Person('John', 'Doe', '04-03-1980');
const person2 = new Person('Rawr', 'Smith', '05-10-1993');

console.log(person1.getBirthYear());
console.log(person1.getFullName());
