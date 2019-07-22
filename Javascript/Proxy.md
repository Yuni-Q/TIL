# Proxy

```javascript
const myObj = { name: "crong", changedValue: 0 };
const proxy = new Proxy(myObj, {
  get: function(target, property, recevier) {
    console.log("get value");
    // return Reflect.get(target[property]);
    return property in target ? target[property] : "anonymous";
  },
  set: function(target, property, value) {
    console.log("set value");
    target["changedValue"]++;
    target[property] = value;
  }
});
proxy.name = "codesquad";
proxy.changedValue;
```
