// function Counter() {
//   this.sum = 0;
//   this.count = 0;
// }

// Counter.prototype.add = (array) => {
//   // entry는 array의 배열 요소의 값
//   array.forEach((entry) => {
//     this.sum += entry; // 2번째 인자 this를 전달하지 않으면 this === window
//     this.count++;
//   }, this);
// };

// var counter = new Counter();
// counter.add([2, 5, 9]);
// console.log(counter.count); // 3
// console.log(counter.sum);   // 16

function Counter() {
  this.sum = 0;
  this.count = 0;
}

Counter.prototype.add = function (array) {
  // entry는 array의 배열 요소의 값
  array.forEach(function (entry) {
    this.sum += entry; // 2번째 인자 this를 전달하지 않으면 this === window
    this.count++;
  }, this);
};

var counter = new Counter();
counter.add([2, 5, 9]);
console.log(counter.count); // 3
console.log(counter.sum);   // 16