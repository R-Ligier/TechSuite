import React from 'react';
import Modal from 'react-responsive-modal';

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
    
    return (
      <div className ="example">
        <button className = "btn btn-action" onClick={this.onOpenModal}>
          Show more
        </button>{' '}
       
        <Modal open = {open} onClose = {this.onCloseModal} center>
          <h2>{task.taskName}</h2>
          <p> {task.taskDescription} </p>
        </Modal>
      </div>
    );
  }
}
export default Box;

//https://react-responsive-modal.leopradel.com/