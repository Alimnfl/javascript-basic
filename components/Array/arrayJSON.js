const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Why you so obsessed with me?',
    isCompleted: true,
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false,
  },
];

// 1. First Way to JSON

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// 2. Loop make with For

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// 3. Loop from todos with for (ambil ID)

// for (let todo of todos) {
//     console.log(todo.id);
//   }

// forEach, Map, Filter => Components/forEachMapFilter.js
