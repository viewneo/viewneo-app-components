'use strict';

import React from 'react';
import InputContainer from './InputContainer';

export default class TextInput extends React.Component {

    onChange(e) {
        this.props.onChange(e.currentTarget.value);
    }

    render() {
        return (
            <InputContainer {...this.props}>
                <input type='text'
                       readOnly={this.props.readOnly}
                       className='form-control'
                       placeholder={this.props.placeholder}
                       name={this.props.name}
                       onChange={this.onChange.bind(this)}
                       value={this.props.value}/>
            </InputContainer>
        );
    }

}
