'use strict';
import React from 'react';

const defaultOuterDivStyle = {
    width: '100%',
    height: '50px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    padding: '6px'
};

export default class ColorPreview extends React.Component {

    render() {
        const { degrees, startColor, endColor } = this.props;
        var colorDivStyle = {
            width: '100%',
            height: '100%',
            background: `linear-gradient(${degrees}deg,${startColor}, ${endColor})`
        };

        return (
            <div style={defaultOuterDivStyle} className="form-group">
                <div style={colorDivStyle}></div>
            </div>
        );
    }
}
