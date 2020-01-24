function Node(data) {
  this.data = data;
  this.next = null;
}

class DoublyLinkedList {
  // 첫번째 노드를 가리키는 필드
  head;
  tail;
  size = 0;
  // 노드의 내용을 쉽게 출력해서 확인해볼 수 있는 기능
  addFirst(input) {
    // 노드를 생성합니다.
    const temp = new Node(input);
    // 새로운 노드의 다음 노드로 해드를 지정합니다.
    temp.next = this.head;
    // 기존에 노드가 있었다면 현재 헤드의 이전 노드로 새로운 노드를 지정합니다.
    if (this.head != null) this.head.prev = temp;
    // 헤드로 새로운 노드를 지정합니다.
    this.head = temp;
    this.size++;
    if (this.head.next == null) {
      this.tail = this.head;
    }
  }
  addLast(input) {
    // 노드를 생성합니다.
    const temp = new Node(input);
    // 리스트의 노드가 없다면 첫번째 노드를 추가하는 메소드를 사용합니다.
    if (this.size == 0) {
      this.addFirst(input);
    } else {
      // 마지막 노드의 다음 노드로 생성한 노드를 지정합니다.
      this.tail.next = temp;
      temp.prev = this.tail;
      // 마지막 노드를 갱신합니다.
      this.tail = temp;
      // 엘리먼트의 개수를 1 증가 시킵니다.
      this.size++;
    }
  }
  add(k, input) {
    // 만약 k가 0이라면 첫번째 노드에 추가하는 것이기 때문에 addFirst를 사용합니다.
    if (k == 0) {
      this.addFirst(input);
    } else {
      // 현재 리스트 상에서 첫번째 노드를 temp1으로 담습니다.
      let temp1 = this.head;
      // k-1 번 반복문을 실행해서 k-1 노드를 찾습니다.
      for (let i = 0; i < k - 1; i++) {
        temp1 = temp1.next;
      }

      // k 번째 노드를 temp2로 지정합니다.
      const temp2 = temp1.next;
      // 새로운 노드를 생성합니다.
      const newNode = new Node(input);
      // 새로운 노드의 다음 노드로 temp2를 지정합니다.
      newNode.next = temp2;
      // temp2의 이전 노드로 새로운 노드를 지정합니다.
      if (temp2 != null) temp2.prev = newNode;
      // temp1의 다음 노드로 새로운 노드를 지정합니다.
      temp1.next = newNode;
      //새로운 노드의 이전 노드로 temp1을 지정합니다.
      newNode.prev = temp1;
      this.size++;
      // 새로운 노드의 다음 노드가 없다면 새로운 노드가 마지막 노드이기 때문에 tail로 지정합니다.
      if (newNode.next == null) {
        this.tail = newNode;
      }
    }
  }
  toString() {
    // 노드가 없다면 []를 리턴합니다.
    if (this.head == null) {
      return "[]";
    }
    // 탐색을 시작합니다.
    let temp = this.head;
    let str = "[";
    // 다음 노드가 없을 때까지 반복문을 실행합니다.
    // 마지막 노드는 다음 노드가 없기 때문에 아래의 구문은 마지막 노드는 제외됩니다.
    while (temp.next != null) {
      str += temp.data + ",";
      temp = temp.next;
    }
    // 마지막 노드를 출력결과에 포함시킵니다.
    str += temp.data;
    return str + "]";
  }
  removeFirst() {
    // 첫번째 노드를 temp로 지정하고 head의 값을 두번째 노드로 변경합니다.
    const temp = this.head;
    this.head = temp.next;
    // 데이터를 삭제하기 전에 리턴할 값을 임시 변수에 담습니다.
    const returnData = temp.data;
    if (this.head != null) this.head.prev = null;
    this.size--;
    return returnData;
  }
  remove(k) {
    if (k == 0) return this.removeFirst();
    // 첫번째 노드를 temp로 지정합니다.
    let temp = this.head;
    // k-1번째 노드를 temp로 지정합니다.
    for (let i = 0; i < k - 1; i++) {
      temp = temp.next;
    }
    // temp.next의 값으로 temp.next.next를 지정해야 합니다.
    // temp.next.next를 위해서는 temp.next가 존재해야 합니다.
    // 따라서 temp.next를 삭제 대상으로 기록해둡니다.
    const todoDeleted = temp.next;
    // temp.next.next의 값을 알았기 때문에 이제 temp.next가 temp.next.next를 가리키도록 합니다.
    temp.next = temp.next.next;
    temp.next.prev = temp;
    // temp.prev
    // 삭제된 데이터를 리턴하기 위해서 returnData에 데이터를 저장합니다.
    const returnData = todoDeleted.data;
    if (todoDeleted == this.tail) {
      this.tail = temp;
    }
    // cur.next를 삭제 합니다.
    this.size--;
    return returnData;
  }
  getSize() {
    return this.size;
  }
  getIndex(k) {
    let temp = this.head;
    // index-1번째 인덱스를 찾은 후에 그 next를 temp 값으로 지정합니다.
    for (let i = 0; i < k; i++) {
      temp = temp.next;
    }
    return temp.data;
  }
  indexOf(data) {
    // 탐색 대상이 되는 노드를 temp로 지정합니다.
    let temp = this.head;
    // 탐색 대상이 몇번째 엘리먼트에 있는지를 의미하는 변수로 index를 사용합니다.
    let index = 0;
    // 탐색 값과 탐색 대상의 값을 비교합니다.
    while (temp.data != data) {
      temp = temp.next;
      index++;
      // temp의 값이 null이라는 것은 더 이상 탐색 대상이 없다는 것을 의미합니다.이 때 -1을 리턴합니다.
      if (temp == null) return -1;
    }
    // 탐색 대상을 찾았다면 대상의 인덱스 값을 리턴합니다.
    return index;
  }

  // 반복자를 생성해서 리턴해줍니다.
  iterator() {
    let lastReturned = null;
    let next = this.head;
    let nextIndex = 0;
    return {
      hasNext: () => {
        return nextIndex < this.size;
      },
      next: () => {
        lastReturned = next;
        next = next.next;
        nextIndex++;
        return {
          done: nextIndex === this.size,
          value: lastReturned.data
        };
      },
      hasPrevious: () => {
        return nextIndex > 0;
      },
      previous: () => {
        lastReturned = next = next == null ? this.tail : next.prev;
        nextIndex--;
        return {
          done: nextIndex === 0,
          value: lastReturned.data
        };
      }
    };
  }
}

const numbers = new DoublyLinkedList();
numbers.addFirst(10);
numbers.addFirst(20);
numbers.addFirst(30);
numbers.addFirst(40);
console.log("add(값)");
console.log(numbers.toString());

numbers.add(1, 50);
console.log("\nadd(인덱스, 값)");
console.log(numbers.toString());

numbers.remove(2);
console.log("\nremove(인덱스)");
console.log(numbers.toString());

console.log("\nget(인덱스)");
console.log(numbers.getIndex(2));

console.log("\nsize()");
console.log(numbers.getSize());

console.log("\nindexOf()");
console.log(numbers.indexOf(30));
console.log(numbers.indexOf(10));

console.log("\nfor loop");
for (let i = 0; i < numbers.getSize(); i++) {
  console.log(numbers.getIndex(i));
}

const it = numbers.iterator();
console.log("\niterator");
while (it.hasNext()) {
  const value = it.next();
  console.log(value);
}
while (it.hasPrevious()) {
  const value = it.previous();
  console.log(value);
}

console.log(numbers.toString());

numbers.remove(0);
console.log(numbers.toString());
