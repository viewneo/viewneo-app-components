'use strict';
import React from 'react';
export default class Icon extends React.Component {
    render() {
        const { icon, size, className, fontello, iconColor, ...other} = this.props;
        let prefix = fontello ? 'icon' : 'fa';
        const style = {};
        if(iconColor) {
            style.color = iconColor;
        }
        return (
            <i {...other} style={style} className={`${prefix} ${prefix}-${icon} ${prefix}-${size} ${className ? className : ''}`}></i>
        );
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
