import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';	

class MyButton extends React.Component {

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
			<div style = {{display: 'flex', justifyContent: 'center'}}>
				<Button variant = "flat"
					onClick={() => handleTaskChange(task)}
					style = {{ background: this.getStateColor(task.taskProgress)}}>
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
