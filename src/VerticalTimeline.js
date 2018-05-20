import React, { Component } from 'react';
import _ from 'lodash';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MyButton from './Button.js';
import tasks from './tasks.json';
import Box from './DialogBox.js';
import Image from './roundicon.svg';


const storage = window.localStorage;
const iconImg = {
	color: "black"
}
class App extends Component {

	constructor(props) {
		super(props);


		// Get the tasks from local storage
		const localTasks = JSON.parse(storage.getItem('tasks'));

		this.state = {
			tasks: localTasks ? localTasks : tasks
		};

		this.changeTask = this.changeTask.bind(this);
	}

	findNextStep(stateName) {
		const nextState = {
			"Incomplete": "In Progress",
			"In Progress": "Completed",
			"Completed": "Incomplete",
		};

		return nextState[stateName];
	}

	changeTask(task) {
		this.setState((prevState) => {

			const taskIndex = _.findIndex(prevState.tasks, ['taskID', task.taskID]);
			prevState.tasks[taskIndex].taskProgress = this.findNextStep(task.taskProgress);

			// Save updated tasks to localstorage
			storage.setItem('tasks', JSON.stringify(prevState.tasks));

			return {
				tasks: prevState.tasks
			};
		})
	}

  render() {
  	const myTasks = this.state.tasks;

    return (
     <VerticalTimeline>
      {

        myTasks.map((task, index) => {

          if (index % 2 === 0) {
            return (

              <VerticalTimelineElement
              position="right"
          	  iconStyle={{ background: "white", color: "black" }}>

	            <h3 className="vertical-timeline-element-title">{task.taskName}</h3>
	            <br/>
	            <h4 className="vertical-timeline-element-subtitle">{task.taskDescription}</h4>
	            <br/>
              	<MyButton task = {task} handleTaskChange = { this.changeTask }/>
              	<br/>
              	<Box task = {task}/>
              </VerticalTimelineElement>

              );

          } else {
          	// iconStyle={style}
            return (
              <VerticalTimelineElement
              position="left"
              >
              <h3 className="vertical-timeline-element-title">{task.taskName}</h3>
              <br/>
              <h4 className="vertical-timeline-element-subtitle">{task.taskDescription}</h4>
              <br/>
              <MyButton task = {task} handleTaskChange = { this.changeTask }/>
              <br/>
              <Box task = {task}/>
              </VerticalTimelineElement>
              );

          }
        })
     }
     </VerticalTimeline>
      );
  }

}

export default App;