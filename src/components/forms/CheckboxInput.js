'use strict';
import React from 'react';
import InputContainer from './InputContainer';
export default class CheckboxInput extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        const value = e.currentTarget.checked ? 1 : 0;
        this.props.onChange(value);
    }
    render() {
        const { value, text } = this.props;
        return (
            <InputContainer {...this.props}>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" id="checkbox"
                               checked={value == 1}
                               onChange={this.onChange}/><label htmlFor="checkbox">{text}</label>
                    </label>
                </div>
            </InputContainer>
        );
    }
}
