'use strict';

import React from 'react';
import InputContainer from './InputContainer';

export default class TextArea extends React.Component {

    onChange(e) {
        this.props.onChange(e.currentTarget.value);
    }

    render() {
        return (
            <InputContainer {...this.props}>
                <textarea name={this.props.name}
                          className="form-control"
                          placeholder={this.props.placeholder}
                          readOnly={this.props.readOnly}
                          onChange={this.onChange.bind(this)}
                          value={this.props.value}
                          rows={this.props.rows}/>
            </InputContainer>
        );
    }

}

TextArea.propTypes = {
    rows: React.PropTypes.number
};

TextArea.defaultProps = {
    rows: 5
};