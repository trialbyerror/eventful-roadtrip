import React, { Component } from 'react';
import './HelloWorld.css';



class HelloWorld extends Component {

  constructor(props) {
    super(props);
    this.state = { questionstring: 'Are you having a good day?' ,
    q_id: props.count, how_many_yes: 0, extra_string: "" };
    this.click_yes = this.click_yes.bind(this);
    this.click_no = this.click_no.bind(this);
    this.change_state = this.change_state.bind(this);
    this.if_yes = this.if_yes.bind(this);
  }

  render () {
    return (<div className="HelloWorld">
    {this.state.questionstring}
    <br/>
      <button onClick={this.click_yes}>Yes!</button>
      <button onClick={this.click_no}>No!</button>
      <br />
      {this.state.extra_string}
  </div>);
  }


  if_yes(){
    this.setState({how_many_yes: this.state.how_many_yes + 1});
  }


  change_state(){
    switch (this.state.q_id) {
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
        this.setState({questionstring:  "Are you thinking of harming yourself in any way?" })
        break;
    case 7:
        this.setState({questionstring: "Do you have someone you can call?"})
        break;
    case 8:
        this.setState({questionstring: "Are you thiking of harming yourself in any way?" })
        break;
    case 9:
         if (this.state.how_many_yes < 3){
          this.setState({extra_string: "Today is a good day"});
}
         else {
          this.setState({extra_string: "Today is not a good day"});
         }
  }

}



  click_yes() {
    this.setState({how_many_yes: this.state.how_many_yes + 1});
    this.setState({q_id: this.state.q_id + 1});
    this.change_state();
  }

  click_no(){
    this.change_state();
    this.setState({q_id: this.state.q_id + 1});
  }

  






}

export default HelloWorld;
