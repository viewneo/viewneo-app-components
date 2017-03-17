'use strict';

import React from 'react';
import Form from 'react-formal';

export default class DeleteButton extends React.Component {

    render() {
        return (
            <Form.Button onClick={this.props.onClick} type="button" className="btn btn-danger">
                {this.props.text}
            </Form.Button>
        )
    }

}

DeleteButton.propTypes = {
    text: React.PropTypes.string,
    onClick: React.PropTypes.func
};

DeleteButton.defaultProps = {
    text: 'Delete',
    onClick: function() {}
};