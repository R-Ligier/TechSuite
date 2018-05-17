import React, { Component } from 'react';
import VerticalTimeline from './VerticalTimeline.js'
import Appbar from 'muicss/lib/react/appbar';
//import Button from './Button.js'

class App extends Component {
  render() {
   // 
   // let s1 = {verticalAlign: 'middle'};
    //let s2 = {textAlign: 'center'};

    return(
      <div>
        <header>
        <Appbar style = {{background: "white"}} class="mui--z4" className="mui--appbar-height"> 
        TechSuite
          
        </Appbar>
        </header>

        <VerticalTimeline/>

      </div>
      );
    }

}

export default App;


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
