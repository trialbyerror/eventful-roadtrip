import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import HelloWorldList from './HelloWorldList';
import './App.css';
import './App-header.css';
import './App-description.css';
import './Box.css';
import './Question.css';
import './Button.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Reflecteve</h1>
        </div>

        <div className="App-description">
          <div className="Header1">
            <h2>We are here to lift your mood in less than 5 minutes!</h2>
          </div>
          <div className="Header2">
            <h3>By answering some questions for us, we will help you find an activity that you may enjoy doing.</h3>
          </div>
          <div className="Header">
            <h3>Let's get to it</h3>
          </div>
        </div>
        <HelloWorldList />
      </div>
    );
  }

}
export default App;
