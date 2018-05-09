import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const completedStyle = {
  background: 'green',
};

const incompletedStyle = {
  background: '#26ee99',
}
class Button extends React.Component {
	constructor(props){
		super(props);
		this.state = {status: 'red'}
	}

	changeColor(){
		this.setState({status: 'green'})
	}

	render() {
		return (
			<div>
			<Button onClick = {this.changeColor.bind(this)} style = {{background: this.state.status}}></Button>
			
      		</div>

  	);
  }
}

export default Button;

   