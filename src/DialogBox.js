import React from 'react';
import Modal from 'react-responsive-modal';
import Image from './arrow.svg';
import Button from 'material-ui/Button';

const buttonIcon = {
  backgroundImage: `url(${Image})`
}

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
      <div className ="example">
        <Button variant = "raised" className = "btn btn-action" onClick = {this.onOpenModal}>
         Click to View More
        </Button>
       
        <Modal open = {open} onClose = {this.onCloseModal} center>
          <h2>{task.taskName}</h2>
          <p> {task.taskDescription} </p>

          <ul>
            {task.taskLinks ? task.taskLinks.map(link => (
              <li>
                {link.name}
                <a href = {link.url}>
                  {link.url}
                </a>
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