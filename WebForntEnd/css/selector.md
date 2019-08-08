# selector

```javascript
function $$(selector, context) {
  context = context || document;
  var elements = context.querySelectorAll(selector);
  // return Array.prototype.slice.call(elements);
  return [...elements];

  console.log($$(".item"));
  // Array
  console.log(document.querySelectorAll(".item"));
  // NodeList
}
```
