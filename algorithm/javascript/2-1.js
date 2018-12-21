function solution(M, A) {
  var N = A.length;
  var count = new Array(M + 1);
  var i;
  for (i = 0; i <= M; i++)
      count[i] = 0;
  var maxOccurence = 1;
  var index = -1;
  for (i = 0; i < N; i++) {
      if (count[A[i]] > 0) {
          var tmp = count[A[i]];
          if (tmp + 1 > maxOccurence) {
              maxOccurence = tmp + 1 ;
              index = i;
          }
          count[A[i]] = tmp + 1;
      } else {
          count[A[i]] = 1;
      }
  }
  return A[index];
}