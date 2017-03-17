'use strict';
import React from 'react';
import { Hint } from '../common';
var Form = require('react-formal');

export default class InputContainer extends React.Component {

    render() {
      return (
          <div className='form-group'>
              <label htmlFor={this.props.name}>
                  {this.props.label}
              </label>
              {this.renderHintPopover()}
              <Form.Message for={this.props.name} className='text-danger'/>
              {this.props.children}
          </div>
      );
    }

    renderHintPopover() {
        if(this.props.hintTitle && this.props.hintText) {
            return (
                <Hint hintTitle={this.props.hintTitle} hintText={this.props.hintText} hintUrl={this.props.hintUrl}/>
            );
        } else {
            return null;
        }
    }
}
