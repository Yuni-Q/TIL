# Object assign

```javascript
const healthObj = {
  showHealth: function() {
    console.log("오늘 운동시간 : " + this.healthTime);
  }
};

const myHealth = Object.assign(Object.create(healthObj), {
  name: "crong",
  lastTime: "11:30"
});

console.log("myhealth is " + myHealth);
```

# setProptotypeOf

```javascript
const healthObj = {
  showHealth: function() {
    console.log("오늘 운동시간 : " + this.healthTime);
  }
  setHealth: function(newTime) {
    this.healthTime = newTime;
  }
};

const myHealth = {
  name: "crong",
  lastTime: "11:30"
};

Object.setPrototypeOf(myHealth, healthObj);

console.log("myhealth is ", myHealth);
```

## 활용

```javascript
// parent
const healthObj = {
  showHealth: function() {
    console.log("오늘 운동시간 : " + this.healthTime);
  }
  setHealth: function(newTime) {
    this.healthTime = newTime;
  }
};

// child obj
const healthChildObj = {
  getAge: function() {
    return this.age;
  }
}

Object.setPrototypeOf(healthChildObj, healthObj)

const childObj = Object.setPrototypeOf({age: 22}, healthChildObj)

childObj.setHealth("11:55")
childObj.showHealth(); // "오늘 운동시간 : 11:55"
```
