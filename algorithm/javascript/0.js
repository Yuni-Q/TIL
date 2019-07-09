// you can write to stderr for debugging purposes, e.g.
// process.stderr.write('this is a debug message');

function solution(A, K) {
  let init = 0;
  let length = 0;
  let a = A / K;
  let b = A % K;
  for (let i = 0; i < A.length; i++) {
    if (JSON.stringify(A[i]).length > length) {
      length = JSON.stringify(A[i]).length;
    }
  }

  while (A.length > 0) {
    let c = "+";
    let d = "";
    for (let i = 0; i < length; i++) {
      d += "-";
    }
    d += "+";
    let e = "|";
    if (A.length > K) {
      let c = "+";
      let d = "";
      for (let i = 0; i < length; i++) {
        d += "-";
      }
      d += "+";
      let e = "|";
      for (let i = 0; i < K; i++) {
        c += d;
        for (let j = 0; j < length - JSON.stringify(A[i]).length; j++) {
          e += " ";
        }
        e += A[i] + "|";
      }
      A.splice(0, K);
      if (init === 0) {
        init = 1;
        console.log(c);
      }

      console.log(e);
      console.log(c);
    }
    if (A.length <= K) {
      for (let i = 0; i < A.length; i++) {
        c += d;
        for (let j = 0; j < length - JSON.stringify(A[i]).length; j++) {
          e += " ";
        }
        e += A[i] + "|";
      }
      if (init === 0) {
        init = 1;
        console.log(c);
      }
      console.log(e);
      console.log(c);
      break;
    }
  }
}
