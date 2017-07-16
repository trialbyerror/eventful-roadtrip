import React, { Component } from 'react';
import './AddGreeter.css';

class AddGreeter extends Component {
  constructor(props){
    super(props);
    this.state = { count: 1};
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(event){
    this.setState({count: event.target.value});
  }

  render(){
    return (
      <div className = "AddGreeter">
        <input type="text" onChange = {this.handleUpdate}/>
        &nbsp; &nbsp;
        <button>Add</button>
        </div>
    );
  }

}

export default AddGreeter;
