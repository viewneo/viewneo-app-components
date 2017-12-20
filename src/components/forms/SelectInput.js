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
                <DropdownList
                valueField={this.props.valueField}
                textField={this.props.textField}
                data={this.props.data}
                dropUp={this.props.dropUp}
                defaultValue={this.props.defaultValue ? this.props.defaultValue : 0}
                onChange={this.onChange.bind(this)}
                groupBy={this.props.groupBy}
                disabled={this.props.disabled}/>
            </InputContainer>
        );
    }

}
