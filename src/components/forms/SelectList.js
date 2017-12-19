'use strict';

import React from 'react';
import InputContainer from './InputContainer';
import SelectList from 'react-widgets/lib/SelectList';

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
      let orientation = (this.props.orientation === "horizontal") ? "horizontal" : "vertical";
        return (
            <InputContainer {...this.props}>
                <div className={orientation}>
                  <SelectList
                  valueField={this.props.valueField}
                  textField={this.props.textField}
                  data={this.props.data}
                  defaultValue={this.props.defaultValue ? this.props.defaultValue : 0}
                  onChange={this.onChange.bind(this)}
                  disabled={this.props.disabled}/>
                </div>
            </InputContainer>
        );
    }

}
