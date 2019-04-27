# setTimeout2
```javascript
import React from 'react';

class App extends React.Component {

  state = {
    greeting: 'Hello!'
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!'
      })
      setTimeout(() => {
        this.setState({
          greeting: 'Hello again!2'
        })
      }, 4000)
    }, 4000)
  }
  render() {
    return (
      <>
        {this.state.greeting}
      </>
    );
  }
} 

export default App;
```