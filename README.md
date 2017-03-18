## viewneo-apps-components

Viewneo Apps Components is a set of React components that implement viewneo design patterns specification.

 ## required knowledge

 We recommend that you get to know React before diving into viewneo-apps-components. viewneo-apps-components is a set of React components, so understanding how React fits into web development is important.

 ## installation

Viewneo Apps Components is available as npm module

 ```shell

npm i --save git+https://github.com/viewneo/viewneo-app-components.git

 ```

 or using yarn

  ```shell

yarn add git+https://github.com/viewneo/viewneo-app-components.git

 ```

### usage

Here is a quick example to get you started:



#### /App.js
```javascript

import React, { Component } from 'react';
import { Container, InputText, Button } from 'viewneo-apps-components';


class App extends Component {
  render() {
    return (
      <div className="App">
     <Container>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <InputText value={'Hello'} />
        <Button text="Save"
           modifier="primary"
           isBlock={true}>
        </Button>
        </Container>
      </div>
    );
  }
}

```

#### /style.scss

```scss

@import './node_modules/viewneo-apps-components/build/static/css/main'

```
