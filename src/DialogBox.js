import React from 'react';
import Modal from 'react-responsive-modal';
import Button from 'material-ui/Button';


class Box extends React.Component {
    state = {
    open: false,
  };


  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { task } = this.props;

    console.log(task.taskLinks);

    return (
      <div className = "example" style = {{display: 'flex', justifyContent: 'center'}}>
        <Button className = "btn btn-action" onClick = {this.onOpenModal} style = {{backgroundColor: "transparent"}}>
         View More 
        </Button>
       
        <Modal open = {open} onClose = {this.onCloseModal} center>
          <h2 style = {{textAlign: "center", fontFamily: 'Roboto light'}}>{task.taskName}</h2>
          <p> {task.taskDescription} </p>
          <ul>
            {task.taskLinks ? task.taskLinks.map(link => (
              <li style = {{lineHeight: .5}}>
                <p><b> {link.description} </b> </p>
                <i>{link.name}</i>
                <p> <i>Link:</i> <a href = {link.url}>
                  {link.url}
                </a>
                </p>
              </li>

              )) : null}
          </ul>
        </Modal>
      </div>
    );
  }
}
export default Box;

//https://react-responsive-modal.leopradel.com/
//button icon: https://www.telerik.com/kendo-react-ui/wrappers/buttons/button/icons/