import React, { Component } from 'react';
import _ from 'lodash';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MyButton from './Button.js';
import tasks from './tasks.json';
import Box from './DialogBox.js';



const storage = window.localStorage;

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
              position = "right"
          	  iconStyle = {{ background: "white", boxShadow: "0px 6px 55px 0px rgba(0,0,0,0.75)" }}>

	            <h2 className = "vertical-timeline-element-title" style = {{fontWeight: 900, textAlign: "center"}}>{task.taskName}</h2>
	            <p style = {{fontFamily: 'Roboto', fontSize: 18, lineHeight: 'normal'}}>{task.taskOneLiner}</p>
	            <br/>
	            <p style = {{fontFamily: 'Roboto', fontSize: 18, lineHeight: 'normal'}}>{task.taskPart}</p>
	            <Box task = {task}/>
	            <br/>
              	<MyButton task = {task} handleTaskChange = { this.changeTask } />
              	
              </VerticalTimelineElement>

              );

          } else {
            return (
              <VerticalTimelineElement
              position = "left"
              iconStyle = {{ background: "white", color: "black", boxShadow: "0px 6px 55px 0px rgba(0,0,0,0.75)" }}>
              
              <h2 className = "vertical-timeline-element-title" style = {{fontWeight: 900, textAlign: "center"}}>{task.taskName}</h2>
              <p style = {{fontFamily: 'Roboto', fontSize: 18, lineHeight: 'normal'}}>{task.taskOneLiner}</p>
              <br/>
	          <p style = {{fontFamily: 'Roboto', fontSize: 18, lineHeight: 'normal'}}>{task.taskPart}</p>
              <br/>
              <Box task = {task}/>
              <br/>
              <MyButton task = {task} handleTaskChange = { this.changeTask }/>
             
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