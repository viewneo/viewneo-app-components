'use strict';

import React from 'react';
import InputContainer from './InputContainer';
import ThemeService from '../../services/ThemeService';

export default class TextInput extends React.Component {

    constructor(){
     super();
      this.theme = ThemeService.getTheme();
      this.state = {};
    }

    componentDidMount() {
        this.setState({
           style : {} 
        });
    }

    onChange(e) {
        this.props.onChange(e.currentTarget.value);
    }

    onFocus() {
        this.setState({
          style : {
             border: this.theme.primary_color
            }
        });
    }

    onBlur() {
      this.setState({
        style: {}
      });
    }

    render() {
        return (
            <InputContainer {...this.props}>
                <input type='text'
                       readOnly={this.props.readOnly}
                       className='form-control'                                                                  
                       onFocus={ () => this.onFocus() }
                       onBlur={ () => this.onBlur()}
                       style={this.state.style}
                       placeholder={this.props.placeholder}
                       name={this.props.name}
                       onChange={this.onChange.bind(this)}
                       value={this.props.value}/>
            </InputContainer>
        );
    }

}
