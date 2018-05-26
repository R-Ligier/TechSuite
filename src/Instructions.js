import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


const PaperStyle = {
	height: 380,
	width: 1500,
	paddingTop: 16,
	marginTop: 40,
    paddingBottom: 16
}


class Intructions extends React.Component{

render() {
	return(
		<Paper style = {PaperStyle} elevation = {4}>
			<Typography variant = "headline" component = "h3" style = {{textAlign: "center", fontWeight: 500, fontFamily: 'Pacifico', fontSize: 50}}>
				TechSuite
			</Typography>

			<Typography style = {{textAlign: "center", fontSize: 20}} component = "p">
         		<i> TechSuite is a step by step career guide for new comers, beginners, and anyone else interested in becoming a developer and working in the tech industry. </i>
       		</Typography>
       		
       		<br/>

       		<Typography style = {{fontSize: 18, marginLeft: 20, marginRight: 8}}>
         		The career guide is structured in a timeline flow for you to follow. The first task to begin with is "Learn a Programming Language". You do not need to begin with the first task and are free to begin at any point.
       		</Typography>

       		<br/>

       		<Typography style = {{fontSize: 18, marginLeft: 20, marginRight: 8}}>

         		<b style = {{fontSize: 20}}> Navigation </b>

         		<p> All tasks begin as Incomplete. To change the tasks status, do the following: </p>
         		
         		<ul>
         			<li> <b>Task is In Progress:</b> Click on the status button once </li>
         			<li> <b>Task is Complete:</b> Click on the status button twice </li>
         		</ul>

         		<p> To view further content of a task, click the <b> View More </b> button. </p>

       		</Typography>
		</Paper>
		);
}

}

export default Intructions;