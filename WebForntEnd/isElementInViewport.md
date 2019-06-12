```javascript
export function isElementInViewport(element: HTMLElement) {
  // Code from http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  if (canUseDOM()) {
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const rect = element.getBoundingClientRect();
    const verticalInView =
      (rect.top >= 0 && rect.top <= windowHeight) ||
      (rect.bottom >= 0 && rect.bottom <= windowHeight);
    const horizontalInView =
      (rect.left >= 0 && rect.left <= windowWidth) ||
      (rect.right >= 0 && rect.right <= windowWidth);
    return verticalInView && horizontalInView;
  }
}
```
