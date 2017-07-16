import React, { Component } from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';

class HelloWorldList extends Component {
constructor (props) {
  super (props);
  this.state = {greetings: [5]};
  this.addGreeting = this.addGreeting.bind(this);
}

  render() {
    return (
      <div className = "HelloWorldList">
        {this.renderGreetings()}
      </div>

    );
  }

  renderGreetings() {
    return this.state.greetings.map(count => (
      <HelloWorld key={count} count={count} />
    ));
  }

  addGreeting(newName) {
    this.setState({ greetings: [newName, ...this.state.greetings] });
  }
}

export default HelloWorldList;
