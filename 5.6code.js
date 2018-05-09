  render() {
    return( 
      <VerticalTimeline>
      tasks.map(function(task, index){

        if (index.length%2 == 0) {
          console.log(index);

          <VerticalTimelineElement
          position = "right" >
          className = "vertical-timeline-element--work"
          iconStyle = {{ background: 'rgb(33, 150, 243)', color: '#fff' }}>

          <h3 className = "vertical-timeline-element-title"> {index} </h3>
          <h4 className = "vertical-timeline-element-subtitle"> Miami, FL </h4>
          <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
          className = "vertical-timeline-element--work"
          iconStyle = {{ background: 'rgb(33, 150, 243)', color: '#fff' }}>

          <h3 className = "vertical-timeline-element-title"> Art Director </h3>
          <h4 className = "vertical-timeline-element-subtitle"> San Francisco, CA </h4>
          <p>
          Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
          </VerticalTimelineElement>
        } else {
          <VerticalTimelineElement
          position = "left"
          className = "vertical-timeline-element--work"
          iconStyle = {{ background: 'rgb(33, 150, 243)', color: '#fff' }}>

          <h3 className = "vertical-timeline-element-title"> Web Designer</h3>
          <h4 className = "vertical-timeline-element-subtitle"> Los Angeles, CA </h4>
          <p>
          User Experience, Visual Design
          </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className = "vertical-timeline-element--work"
          iconStyle = {{ background: 'rgb(33, 150, 243)', color: '#fff' }}>

          <h3 className = "vertical-timeline-element-title">Web Designer </h3>
          <h4 className = "vertical-timeline-element-subtitle">San Francisco, CA </h4>
          <p>
          User Experience, Visual Design
          </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className = "vertical-timeline-element--education"
          iconStyle = {{ background: 'rgb(233, 30, 99)', color: '#fff' }}>

          <h3 className = "vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
          Strategy, Social Media
          </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className = "vertical-timeline-element--education"
          iconStyle = {{ background: 'rgb(233, 30, 99)', color: '#fff' }}>

          <h3 className = "vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
          Creative Direction, User Experience, Visual Design
          </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className = "vertical-timeline-element--education"
          iconStyle = {{ background: 'rgb(233, 30, 99)', color: '#fff' }}>

          <h3 className = "vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
          <h4 className = "vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>
          Creative Direction, Visual Design
          </p>
          </VerticalTimelineElement>
        }
      }
      </VerticalTimeline>

      );



    }

  }