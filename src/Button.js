import React from 'react';
import PropTypes from 'prop-types';
import Button from 'muicss/lib/react/button';


// const states = [
// 	{
// 		name: "Incompleted",
// 		color: "red",
// 	},
// 	{
// 		name: "In progress",
// 		color: "yellow",
// 	},
// 	{
// 		name: "Completed",
// 		color: "green",
// 	},
// ];

// const completedStyle = {
//   background: 'green',
// };

// const incompletedStyle = {
//   background: '#26ee99',
// }
class MyButton extends React.Component {
	// constructor(props){
	// 	super(props);
	// }

	getStateColor(stateName) {
		const stateColors = {
			"Incomplete": "red",		
			"In Progress": "yellow",
			"Completed": "green",
		};

		return stateColors[stateName];
	}

	render() {
		const { task, handleTaskChange } = this.props;

		return (
			<div>
				<Button size = "large"
					onClick={() => handleTaskChange(task)}
					style={{ background: this.getStateColor(task.taskProgress) }}>
					{task.taskProgress}
				</Button>
      		</div>
  	);
  }
}

MyButton.propTypes = {
	task: PropTypes.object,
	handleTaskChange: PropTypes.func
}

export default MyButton;

   