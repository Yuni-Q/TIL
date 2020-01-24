class ArrayList {
  size = 0;
  elementData = new Array(100);
  constructor() {}

  add(element) {
    this.elementData[this.size++] = element;
    return true;
  }
  addIndex(index, element) {
    for (let i = this.size - 1; i >= index; i--) {
      this.elementData[i + 1] = this.elementData[i];
    }
    this.elementData[index] = element;
    this.size++;
    return true;
  }
  remove(index) {
    const removed = this.elementData[index];
    for (let i = index + 1; i <= this.size - 1; i++) {
      this.elementData[i - 1] = this.elementData[i];
    }
    this.size--;
    this.elementData[this.size] = null;
    return removed;
  }
  get(index) {
    return this.elementData[index];
  }
  getSize() {
    return this.size;
  }
  indexOf(o) {
    for (let i = 0; i < this.size; i++) {
      if (o === this.elementData[i]) {
        return i;
      }
    }
    return -1;
  }
  toString() {
    let str = "[";
    for (let i = 0; i < this.size; i++) {
      str += this.elementData[i];
      if (i < this.size - 1) str += ",";
    }
    return str + "]";
  }
  iterator() {
    let cursor = 0;
    return {
      hasNext: () => {
        return this.size != cursor;
      },
      next: () => {
        const done = cursor >= this.size;
        const value = !done ? this.elementData[cursor++] : undefined;
        return {
          done: done,
          value: value
        };
      }
    };
  }
}

const numbers = new ArrayList();

numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(40);
console.log("add", numbers.toString());
numbers.addIndex(1, 50);
console.log("addIndex", numbers.toString());
numbers.remove(2);
console.log("remove", numbers.toString());
console.log("get", numbers.get(2));
console.log("size", numbers.getSize());
console.log("indexof", numbers.indexOf(30));
console.log("loop start");
for (let i = 0; i < numbers.getSize(); i++) {
  console.log(numbers.get(i));
}
console.log("loop end");
console.log("iterator start");
const it = numbers.iterator();
while (it.hasNext()) {
  let value = it.next();
  console.log(value);
}
console.log("iterator end");
console.log(numbers.toString());
