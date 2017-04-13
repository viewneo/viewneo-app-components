'use strict';

import React from 'react';
import Form from 'react-formal';

var default_colors = {};
export default class CancelButton extends React.Component {

    render() {
    	return (
            <Form.Button type="button" onClick={this.props.onCancelClick}
            className="btn btn-cancel">
                {this.props.isLoading ? this.renderSpinner() : this.props.cancelText }
            </Form.Button>
        );
    }

    renderSpinner() {
        return (
            <div className="loadingSpinner"></div>
        );
    }
}

CancelButton.propTypes = {
    text: React.PropTypes.string
};

CancelButton.defaultProps = {
  text: 'Cancel'
};
