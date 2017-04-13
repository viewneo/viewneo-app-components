'use strict';
import React from 'react';
import ThemeService from '../services/ThemeService';

var default_colors = {};
export default class Icon extends React.Component {

    constructor(){
     super();
      this.theme = ThemeService.getTheme();
      this.setDefaultColors();
      this.state = {};
    }

    componentDidMount() {
        this.setState({
           style : default_colors
        });
    }
    
    mouseOver() {
        this.setState({
            style: {
                color: this.theme.primary_color
            }
        });
    }

    mouseOut() {
        this.setState({
            style: default_colors
        });
    }
    
    render() {
        const { icon, size, className, fontello, ...other} = this.props;
        let prefix = fontello ? 'icon' : 'fa';
        const style = {};
        if(this.state) {
            if(this.state.style) {
                style.color = this.state.style.color;
            }
        }
        return (
            <i {...other} 
            style={style} 
            onMouseOver={ () => this.mouseOver()}
            onMouseOut={ () => this.mouseOut()}
            className={`${prefix} ${prefix}-${icon} ${prefix}-${size} ${className ? className : ''}`}></i>
        );
    }

    setDefaultColors() {
        default_colors.color = '#bfbfbf'
    }
}
Icon.propTypes = {
    icon: React.PropTypes.string,
    size: React.PropTypes.string,
    fontello: React.PropTypes.bool,
    iconColor: React.PropTypes.string,
};
Icon.defaultProps = {
    icon: 'circle-thin',
    size: '',
    fontello: false
};
