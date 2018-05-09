import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import logo from './logo.svg';
// import './App.css';
import tasks from './tasks.json';

class App extends Component {
  render() {

    return(
      <VerticalTimeline>
        {
          tasks.map((task, index) => {
            if (index % 2 == 0) {
              return (
                <VerticalTimelineElement
                  position="right"
                >
                  <h3 className="vertical-timeline-element-title">{index}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{task.taskDescription}</h4>
                </VerticalTimelineElement>
              );

            } else {
                          return (
                <VerticalTimelineElement
                  position="left"
                >
                  <h3 className="vertical-timeline-element-title">{index}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{task.taskDescription}</h4>
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


