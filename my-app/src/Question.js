import React, { Component } from 'react';




function make_question(questionstring, count){
	this.questionstring = questionstring;
	this.count = count;
}

function on_click(current){
	if (current){
	this.setState({ count: this.state.count + 1 })
} 
    else {
         this.setState({ count: this.state.count + 2 })

    }

}



function change_state(currentstate){
	switch (this.state.) {
		case 0:
		   this.setState({questionstring: "Are you having a good day?" }) 
		case 1:
		   this.setState({questionstring: "Is it better than yesterday?"}) 
		case 2:
		   this.setState({questionstring: "Any progress is improvement! are you having negative thoughts?" }) 
		case 3:
		    this.setState({questionstring: "Lets take it one day at a time! can you think of a positive memory?"}) 
		case 4:
		    this.setState({questionstring: "Are you having trouble breathing?"})
		case 5:
		    this.setState({questionstring: "Are you having negative thoughts?"})
		case 6: 
		    this.setState({questionstring:  "Are you thiking of harming yourself in any way?" })
		case 7: 
		    this.setState({questionstring: "Are you thiking of harming yourself in any way?"})
		case 8:
		    this.setState({questionstring: "Are you thiking of harming yourself in any way?" }
	}

}
