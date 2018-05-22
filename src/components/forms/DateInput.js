'use strict';

import React from 'react';
import moment from 'moment';
import InputContainer from './InputContainer';
import DatePicker from 'react-datepicker';

let userLang = navigator.language || navigator.userLanguage || 'en';
let format = moment().locale(userLang).localeData().longDateFormat('L');

export default class DateInput extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.props.onChange( value ? moment(value) : null);
    }

    render() {
        const { value, onChange, isClearable, placeholder } = this.props;
        return (
            <InputContainer {...this.props}>
                <DatePicker selected={value ? moment(value) : null}
                            onChange={this.onChange}
                            placeholderText={format}
                            isClearable={isClearable}
                            dateFormat={format}
                            className='form-control'/>
            </InputContainer>
        );
    }

}
