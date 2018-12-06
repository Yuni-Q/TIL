
const a = [1, 2, 3, 4, 5];

console.log(a.indexOf(1));
console.log(a.includes(1));

const animals = new Array("dog", "cat", "seal", "walrus", "lion", "cat");

// 배열에서 원소 제거
console.log(animals.splice(animals.indexOf("walrus"), 1));    //dog,cat,seal,lion,cat
console.log(animals)
// 원소 치환
console.log(animals.splice(animals.lastIndexOf("cat"), 1, "monkey"));  //dog,cat,seal,lion,monkey
console.log(animals)