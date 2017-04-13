'use strict';

import React from 'react';
import Form from 'react-formal';
import {Modal, ModalHeader, ModalTitle, ModalFooter, ModalBody, ModalClose} from 'react-modal-bootstrap';
import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton';

export default class Footer extends React.Component {

  render() {
    return (
      <ModalFooter>
        <SubmitButton {...this.props}/>
        <CancelButton {...this.props}/>
      </ModalFooter>
    );
  }
}
