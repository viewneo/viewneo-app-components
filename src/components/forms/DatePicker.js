'use strict';

import React from 'react';
import Form from 'react-formal';
import InputContainer from './InputContainer';

export default class DatePicker extends React.Component {

    onChange(e) {
        this.props.onChange(e.currentTarget.value);
    }

    render() {
        return (
            <InputContainer {...this.props}>
                <Form.Field name={this.props.name}
                    className='form-control'
                    label={ this.props.label }
                    placeholder={this.props.placeholder}
                    hintTitle={ this.props.hintTitle }
                    hintText={ this.props.hintText }/>
                <Form.Message for='startDate'/>
            </InputContainer>
        );
    }

}
