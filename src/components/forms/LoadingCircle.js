'use strict';

import React from 'react';
import Form from 'react-formal';
import ThemeService from '../../services/ThemeService';

var default_colors = {};
export default class LoadingCircle extends React.Component {

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

    render() {
    	return (
        <div className="spinner">
          <div className="bounce1" style={this.state.style}></div>
          <div className="bounce2" style={this.state.style}></div>
          <div className="bounce3" style={this.state.style}></div>
        </div>
      );
    }

    setDefaultColors() {
        default_colors.backgroundColor = this.theme.primary_color;
    }
}
