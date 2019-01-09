const a = [1, 2, 3, 4, 5];
const b = a.map(i => {
  return i * 2;
});
const c = b.filter(i => {
  return i % 2;
});

console.log(c);