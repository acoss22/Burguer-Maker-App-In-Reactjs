import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    //return (
    //   <div className="App">
    //     <h1>Hi, I'am a react app!</h1>
    //   </div>
    // );

    return React.createElement('div', null, 'h1', 'Hi, I\'am a react app!');
  }
}

export default App;
