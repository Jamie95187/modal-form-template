import React, { Component, Fragment } from 'react';
import { Modal } from '../Modal';
import TriggerButton from '../TriggerButton';

// The whole screen is the container.
// The background darkens when the popup is visible
// The container holds two components the Modal and TriggerButton
// Initially, it's not shown and isShown is false. It conditionally renders Modal.

class Container extends Component {
  state = { isShown: false };

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
