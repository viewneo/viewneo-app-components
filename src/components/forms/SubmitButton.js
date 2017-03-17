'use strict';

import React from 'react';
import Form from 'react-formal';

export default class SubmitButton extends React.Component {

    render() {
        return (
            <Form.Button type="submit" className="btn btn-block btn-primary">
                {this.props.text}
            </Form.Button>
        );
    }

}

SubmitButton.propTypes = {
    text: React.PropTypes.string
};

SubmitButton.defaultProps = {
  text: 'Submit'
};