// Class Constructior
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate Object
const person1 = new Person('John', 'Doe', '04-03-1980');
const person2 = new Person('Rawr', 'Smith', '05-10-1993');

console.log(person1);
console.log(person2.getFullName());
