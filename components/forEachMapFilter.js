//forEach, Map, Filter
// IMPORTANT >>

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

// 1. ForEach
// todos.forEach(function (todo) {
//   return todo.text;
// });

// 2. Map
// const todoText = todos.map(function (todo) {
//     return todo.text;
//   });

//   console.log(todoText);

// 3. Filter
// const todoCompleted = todos.filter(function (todo) {
//   return (todo.isCompleted = true);
// });

// console.log(todoCompleted);

// 4. Filter + Map
const todoCompleted = todos
  .filter(function (todo) {
    return (todo.isCompleted = true);
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted);
