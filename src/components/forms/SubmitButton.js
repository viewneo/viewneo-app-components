'use strict';

import React from 'react';
import Form from 'react-formal';
import ThemeService from '../../services/ThemeService';

var default_colors = {};
export default class SubmitButton extends React.Component {

	constructor(){
     super();
      this.theme = ThemeService.getTheme();
      this.setDefaultColors();
      this.state = default_colors;
    }

    componentDidMount() {
        this.setState({
           style : default_colors
        });
    }

    mouseOver() {
        this.setState({
            style: {
                color: this.theme.button_text_color,
                backgroundColor: this.theme.primary_color,
                opacity: 0.75,
								float:'right'
            }
        });
    }

    mouseOut() {
        this.setState({
            style: default_colors
        });
    }

    render() {
    	return (
            <Form.Button type="submit"
            className="btn btn-primary"
            onMouseOver={ () => this.mouseOver()}
            onMouseOut={ () => this.mouseOut()}
            style={this.state.style}>
                {this.props.isLoading ? this.renderSpinner() : this.props.saveText }
            </Form.Button>
        );
    }

    renderSpinner() {
        return (
            <div className="loadingSpinner"></div>
        );
    }

    setDefaultColors() {
        default_colors.backgroundColor = this.theme.primary_color;
        default_colors.opacity = 1;
        default_colors.color = this.theme.button_text_color;
    }

}

SubmitButton.propTypes = {
    text: React.PropTypes.string
};

SubmitButton.defaultProps = {
  text: 'Submit'
};
