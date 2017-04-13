
import React from 'react';

class Button extends React.Component {

  render() {
    const { onClick, text } = this.props;

    let { className, modifier, isBlock } = this.props;
    let blockClass = isBlock ? 'btn-block' : '';
    className = className || '';
    modifier = modifier ? `btn-${modifier}` : '';


    return (
      <button className={`btn ${className} ${modifier} ${blockClass}`}>
        { text }
      </button>
    );
  }

}

Button.defaultProps = {
  onClick: () => {}
};

export default Button;
