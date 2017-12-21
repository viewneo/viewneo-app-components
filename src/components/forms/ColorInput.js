'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { ChromePicker } from 'react-color';
/*import $ from 'jquery';*/
import InputContainer from './InputContainer';
import TextInput from './TextInput';
export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);
  }
  open() {
    this.setState({
      isOpen: true
    });
  }
  close() {
    this.setState({
      isOpen: false
    });
  }
  onChange(e) {
      this.props.onChange(e.currentTarget.value);
  }

  /**
  * Add click-listener to docuemnt when component mounts.
  *
  */
  componentDidMount(){
    document.addEventListener('click', this.onDocumentClick);
  }

  /**
  * Remove click listener from document when component unmounts.
  *
  */
  componentWillUnmount(){
    document.removeEventListener('click', this.onDocumentClick);
  }
  onDocumentClick(e) {
    const element = ReactDOM.findDOMNode(this);
    if (e.target !== element && !element.contains(e.target)) {
      this.close();
    }
  }
  render() {
    const { color, onChange } = this.props;
    const { isOpen } = this.state;
    const innerStyle = {
      backgroundColor: color
    };
    const colorPickerStyle = {};
    if(this.props.orientationUp && this.props.orientationUp === true) {
      colorPickerStyle.top = 'inherit';
      colorPickerStyle.bottom = '0';
    }
     return (
      <InputContainer {...this.props}>
        <div className="color-container">
          <input type='text'
                 readOnly={false}
                 className='color-input'
                 placeholder={this.props.placeholder}
                 name={this.props.name}
                 onChange={this.onChange.bind(this)}
                 value={this.props.value}/>
          <div className="color-picker" onClick={this.open}>
            <span className="color-picker-inner" style={innerStyle}></span>
            <div className="color-picker-picker" style={colorPickerStyle}>
              { isOpen ? <ChromePicker onChange={onChange} color={color}/> : null}
            </div>
          </div>
        </div>
      </InputContainer>
    );
  }
}
ColorPicker.propTypes = {
  color: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};
