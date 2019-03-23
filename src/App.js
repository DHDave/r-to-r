import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWord = 'Welcome to the Road to learn React.';
    let user = {firstName: 'David', lastName: 'H'};
    let intro = 'This is a test application'
    return (
      <div className="App">
          <h2>
            {helloWord}
          </h2>
          <h3>
            {intro} that I am buiding to better my React and JS skills.
            Oh... by the way my name is {user.firstName}
          </h3>
      </div>
    );
  }
}

export default App;
