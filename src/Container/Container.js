import React, { Component, Fragment } from 'react';
import { Modal } from '../Modal';
import TriggerButton from '../TriggerButton';
import './Container.css';

// The whole screen is the container.
// The background darkens when the popup is visible
// The container holds two components the Modal and TriggerButton
// Initially, it's not shown and isShown is false. It conditionally renders Modal.

class Container extends Component {
  state = { isShown: false };

  // Stop scrolling when modal is open
  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  }

  showModal = () => {
    this.setState({ isShown: true }, () => {
    this.closeButton.focus();
    this.toggleScrollLock();
    })
  }

  // closeModal sets isShown to false and Modal no longer renders in the DOM.
  // it gives focus to the trigger button and toggles scroll lock.
  closeModal = () => {
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
  }

  // closes Modal if Escape is pressed on the keyboard
  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };

  // closes Modal if you click outside of the Modal
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return
    this.closeModal();
  }

  render() {
    return (
      <Fragment>
      <TriggerButton
        showModal={this.showModal}
        buttonRef={ (n) => (this.TriggerButton = n) }
        triggerText={this.props.triggerText}
      />

  /*
    Conditionally renders the Modal
    onSubmit form submit action
    modalRef to refer to the modal area
    buttonRef to refer to close button
    closeModal and showModal to close and open Modal
    onClickOutside detect user clicked outside the Modal
  */

  {this.state.isShown ? (
    <Modal
      onSubmit={this.props.onSubmit}
      modalRef={ (n) => (this.modal = n) }
      buttonRef={ (n) => (this.closeButton = n)}
      closeModal={this.closeModal}
      onKeyDown={this.onKeyDown}
      onClickOutside={this.onClickOutside}
      />
    ) : null}
    </Fragment>
);
  }
}

export default Container;
