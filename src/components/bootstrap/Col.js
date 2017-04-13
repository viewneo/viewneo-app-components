
import React from 'react';

class Col extends React.Component {

  render() {
    const { children, size } = this.props;
    let className = '';
    if(size.xs) {
      className += `col-xs-${size.xs} `;
    }
    if(size.sm) {
      className += `col-sm-${size.sm} `;
    }
    if(size.md) {
      className += `col-md-${size.md} `;
    }
    if(size.lg) {
      className += `col-lg-${size.lg} `;
    }

    return (
      <div className={className}>
        { children }
      </div>
    );
  }

}

export default Col;
