const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sport'],
  address: {
    street: '50 main st',
    city: 'boston',
    state: 'MA',
  },
};

// 1. First Way
// console.log(person.address.street);
// console.log(person.address);

// 2. Second Way
// const {
//   firstName,
//   lastName,
//   address: { city },
// } = person;

// console.log(firstName);
