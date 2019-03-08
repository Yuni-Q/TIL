
# react state update on an unmounted component

```javascript
private isMounted = false 선언

componentDidMount() {
    this.isMounted = true;
    if (this.isMounted) {
          this.setState(() => ({
              ///
          }));
    }
}

componentWillUnmount() {
    this.isMounted = false;
    };
```