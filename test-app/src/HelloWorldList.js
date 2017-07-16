import React, { Component } from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';

class HelloWorldList extends Component {
constructor (props) {
  super (props);
  this.state = {greetings: ["Jim", "Sally", "Bender"]};
  this.addGreeting = this.addGreeting.bind(this);
}

  render() {
    return (
      <div className = "HelloWorldList">
        <AddGreeter addGreeting = {this.addGreeting}/>
        {this.renderGreetings()}
      </div>

    );
  }

  renderGreetings() {
    return this.state.greetings.map(questionString => (
      <HelloWorld key={questionString} questionString={questionString} />
    ));
  }

  addGreeting(newName) {
    this.setState({ greetings: [newName, ...this.state.greetings] });
  }
}

export default HelloWorldList;
