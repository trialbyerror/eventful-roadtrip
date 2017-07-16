import React, { Component } from 'react';
import './HelloWorld.css';



class HelloWorld extends Component {

  constructor(props) {
    super(props);
    this.click_yes = this.click_yes.bind(this);
    this.click_no = this.click_no.bind(this);
    this.change_state = this.change_state.bind(this);
    this.state = { questionstring: "First question",
    count: props.count };
  }

  render () {
    return (<div className="HelloWorld">
    {this.change_state}
    {this.state.questionstring}
    <br/>
      <button onClick={this.click_yes}>Yes!</button>
      <button onClick={this.click_no}>No!</button>
  </div>);
  }



  change_state(){
    switch (this.state.count) {
    case 0:
       this.setState({questionstring: "Have you gotten any exercise today?" })
       break;
    case 1:
       this.setState({questionstring: "Is it better than yesterday?"})
       break;
    case 2:
       this.setState({questionstring: "Any progress is improvement! are you having negative thoughts?" })
       break;
    case 3:
        this.setState({questionstring: "Lets take it one day at a time! can you think of a positive memory?"})
        break;
    case 4:
        this.setState({questionstring: "Are you having trouble breathing?"})
        break;
    case 5:
        this.setState({questionstring: "Are you having negative thoughts?"})
        break;
    case 6:
        this.setState({questionstring:  "Are you thiking of harming yourself in any way?" })
        break;
    case 7:
        this.setState({questionstring: "Are you thiking of harming yourself in any way?"})
        break;
    case 8:
        this.setState({questionstring: "Are you thiking of harming yourself in any way?" })
        break;
  }

}



  click_yes() {
    this.setState({count: this.state.count + 1});
    this.change_state();
  }

  click_no(){
    this.setState({count: this.state.count + 2 });
    this.change_state();
  }






}

export default HelloWorld;
