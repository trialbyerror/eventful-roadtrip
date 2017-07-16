import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './App-header';
import './App-description';
import './Box';
import './Question';
import './Button';

//import "Question_data_sample.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Feel Better</h1>
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

        <div className="Box">
          <div className="Question">
            Are you having a good day?
          </div>
          
          <div className="Button">
            Yes
          </div>
          <div className="Button">
            No
          </div>

        </div>


      </div>
    );
  }
}

export default App;
