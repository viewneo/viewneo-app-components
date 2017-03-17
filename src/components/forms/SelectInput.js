'use strict';

import React from 'react';
import InputContainer from './InputContainer';
import DropdownList from 'react-widgets/lib/DropdownList';

export default class SelectInput extends React.Component {

    onChange(value) {
        const valueField = this.props.valueField;
        if(valueField) {
            this.props.onChange(value[valueField]);
        }
        else {
            this.props.onChange(value);
        }
    }

    render() {
        return (
            <InputContainer {...this.props}>
                <DropdownList {...this.props} onChange={this.onChange.bind(this)}/>
            </InputContainer>
        );
    }

}
