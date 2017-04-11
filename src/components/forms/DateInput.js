'use strict';

import React from 'React';
import moment from 'moment';
import InputContainer from './InputContainer';
import DatePicker from 'react-datepicker';

const FORMAT = 'YYYY-MM-DD';

export default class DateInput extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.props.onChange( value ? value.format(FORMAT) : null);
    }

    render() {
        const { value, onChange, isClearable, placeholder } = this.props;
        return (
            <InputContainer {...this.props}>
                <DatePicker selected={value ? moment(value, FORMAT) : null}
                            onChange={this.onChange}
                            placeholderText={FORMAT}
                            isClearable={isClearable}
                            dateFormat={FORMAT}
                            className='form-control'/>
            </InputContainer>
        );
    }

}

DateInput.propTypes = {
    isClearable: React.PropTypes.bool
};

DateInput.defaultProps = {
    isClearable: false
};