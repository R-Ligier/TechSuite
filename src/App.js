import React, { Component } from 'react';
import VerticalTimeline from './VerticalTimeline.js'
import Instructions from './Instructions.js'


class App extends Component {
  render() {

    return (
    <div>

      <div style = {{display: 'flex', justifyContent: 'center'}}>
        <Instructions/>
      </div>

      
        <VerticalTimeline />
    </div>

      );
    }
}

export default App;

//Appbar -> https://www.muicss.com/docs/v1/react/appbar
//Appbar -> https://www.muicss.com/docs/v1/css-js/css-helpers


      

// <Appbar style = {{background: "white"}} class="mui--z4" className="mui--appbar-height"> 
        // TechSuite
          
        // </Appbar>

//Passing props example: <Home name = {"Max"} age = {27} user = {user} />

//var user = {
  // name: "Anna",
  // hobbies: ["sports", "reading"]
//};

//Component receiving props
// Example: 
// <p> Your name is {this.props.name} </p>
// <p> User Object => Name: {this.props.user.name} </p>

// <h4 Hobbies <h4/>
// <ul> 
//  {this.props.user.hobbies.map((hobby, i) => <li key = {}> {hobby} </li> )}

//Setting up prop types:
// Home.propTyes = {
  // name: React.propTypes.string,
  // age: React.propTypes.number,
  // user: React.propTypes.object 
//};


// <tr style={s1}> </tr>
