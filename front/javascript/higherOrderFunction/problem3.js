
var todos = [
  { id: 1, content: 'JavaScript' },
  { id: 10, content: 'HTML' },
  { id: 2, content: 'CSS' }
];

function compare(key) {
  return function (a, b) {
    return a[key] > b[key];
  };
}

// id를 기준으로 정렬
todos.sort(compare('id'));
console.log(todos);