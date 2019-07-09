// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution() {
  let answer = "";
  let tds = document.getElementsByTagName("td");
  let tdLength = tds.length;
  for (let i = 0; i < tdLength; i++) {
    let backgroundColor = tds[i].style.backgroundColor;
    let color = tds[i].style.color;
    let textContent = tds[i].textContent;
    if (backgroundColor != color) {
      answer += textContent;
    }
  }
  return answer;
}
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution() {
  // write your code in Javascript
  //
  // you can access DOM Tree using DOM Object Model:
  let answer = 0;
  let body = $("body");
  let length = body.children().size();

  for (let i = 1; i <= length; i++) {
    let ul = $(`body :nth-child(${i})`).find($("ul")).length;
    let ol = $(`body :nth-child(${i})`).find($("ol")).length;
    let count = ul + ol + 1;
    if (count > answer) {
      answer = count;
    }
  }
  return answer;
}
