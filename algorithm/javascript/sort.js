
/* 1. 퀵정렬 2. 버블정렬 3. 선택정렬 4. 합병정렬 5. 삽입정렬 */
const AA = [234, 45634, 23, 41, 2345, 34, 23, 1, 4, 3, 6, 234, 4536, 55, 234, 23, 456, 45, 234, 1, 856, 9, 67, 56, 7];

// 스왑 헬퍼 => 배열의 위치를 바꾼다. 
function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
// 1. 퀵정렬 
// 퀵 정렬은 분할 정복 방법과 재귀를 통해 리스트를 정렬한다. 
function QuickSort(arr) {
  if (arr.length == 0) { return []; }
  const middle = arr[0];
  const len = arr.length;
  const left = [], right = [];
  for (let i = 1; i < len; ++i) {
    if (arr[i] < middle) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return QuickSort(left).concat(middle, QuickSort(right));
}

// 2. 버블정렬
// 버블 정렬은 서로 이웃한 데이터들을 비교하며 가장 큰 데이터를 가장 뒤로 보내며 정렬하는 방식 
function BubbleSort(arr) {
  const len = arr.length;
  for (let outer = len; outer > 1; outer -= 1) {
    for (let inner = 0; inner < outer; inner += 1) {
      if (arr[inner] > arr[inner + 1]) { swap(arr, inner, inner + 1); }
    }
  }
  return arr;
};
// 3. 선택정렬 
// 선택 정렬은 정렬되지 않은 데이터들에 대해 가장 작은 데이터를 찾아 가장 앞의 데이터와 교환해나가는 방식 
function SelectionSort(arr) {
  const len = arr.length;
  let min;
  for (let outer = 0; outer < len - 1; outer += 1) {
    min = outer;
    for (let inner = outer + 1; inner < len; inner += 1) {
      if (arr[inner] < arr[min]) { min = inner; }
    } swap(arr, outer, min);
  }
  return arr;
}
// 4. 합병정렬 
// 퀵정렬과 마찬가지로 분할 정복 알고리즘중 하나이다.
function MergeSort(arr) {
  const len = arr.length;
  if (len == 1) {
    return arr;
  }
  const middle = Math.floor(len / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, len);
  function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
    return result;
  }
  return merge(MergeSort(left), MergeSort(right));
}
// 5. 삽입정렬
// 삽입 정렬은 아직 정렬되지 않은 임의의 데이터를 이미 정렬된 부분의 적절한 위치에 삽입해 가며 정렬하는 방식 
function InsertionSort(arr) {
  const len = arr.length;
  let temp, inner;
  for (var outer = 1; outer < len; outer += 1) {
    temp = arr[outer];
    inner = outer;
    while (inner > 0 && arr[inner - 1] >= temp) {
      arr[inner] = arr[inner - 1];
      inner -= 1;
    }
    arr[inner] = temp;
  }
  return arr;
}
console.log(QuickSort(AA.slice()));
console.log(BubbleSort(AA.slice()));
console.log(SelectionSort(AA.slice()));
console.log(MergeSort(AA.slice()));
console.log(InsertionSort(AA.slice()));

// 출처 : [소년코딩](https://boycoding.tistory.com/74)