'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../Icon';

export default class Hint extends React.Component {

    constructor(props) {
        super(props);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.state = {
            isOpen: false
        };
    }


    render() {
        let {hintTitle, hintText, hintUrl} = this.props;
        const style = this.getPopoverStyle();

        return (
            <div className="hint" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                <div style={style} className={`hint-popover ${this.arrowDirectionY} ${this.arrowDirectionX}` } ref={(ref) => this.popover = ref}>
                    <div className="hint-popover-title"><span>{hintTitle}</span></div>
                    <div className="hint-popover-text" dangerouslySetInnerHTML={{__html: hintText}}>
                    </div>
                    {hintUrl ? this.renderUrl(hintUrl) : null}
                </div>
                <Icon className="hint-icon" fontello={false}
                      icon='question-circle-o'/>
            </div>
        );
    }

    renderUrl(hintUrl) {
        return (
            <div className="hint-popover-url"><a href={hintUrl} target="_blank">Mehr erfahren..</a></div>
        );
    }

    onMouseOver() {
        clearTimeout(this.mouseOutTimer);
        if (!this.state.isOpen) {
            this.mouseOverTimeout = setTimeout(() => {
                this.elementRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
                this.popoverRect = this.popover.getBoundingClientRect();
                this.setState({
                    isOpen: true
                });
            }, this.props.mouseOverTime);
        }
    }

    onMouseOut() {
        clearTimeout(this.mouseOverTimeout);
        this.mouseOutTimer = setTimeout(() => {
            this.setState({
                isOpen: false
            });
        }, this.props.mouseOutTime);
    }


    getPopoverStyle() {
        const {isOpen} = this.state;
        if (isOpen) {
            this.arrowDirectionY = 'bottom';
            this.arrowDirectionX = 'left';
            var elementRect = this.elementRect;
            var popoverRect = this.popoverRect;
            var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

            //default popover style
            let style = {
                top: elementRect.top - popoverRect.height - 10,
                left: elementRect.left - 25,
                right: null,
                width: null
            };

            // check if hint fits in viewport (height)
            if ((elementRect.top - popoverRect.height) < 0) { //pop down
                style.top = elementRect.bottom + 10;
                this.arrowDirectionY = 'top';
            }

            if ((elementRect.right + popoverRect.width) > viewportWidth) {
                style.left =  elementRect.left - popoverRect.width + 37;
                this.arrowDirectionX = 'right';
            }

            return {
                top: style.top,
                left: style.left,
                right: style.right,
                width: style.width,
                visibility: isOpen ? 'visible' : 'hidden'
            };
        }
        return {
            visibility: isOpen ? 'visible' : 'hidden'
        };
    }

}

Hint.propTypes = {
    hintTitle: React.PropTypes.string.isRequired,
    hintText: React.PropTypes.string.isRequired,
    hintUrl: React.PropTypes.string,
};

Hint.defaultProps = {
    mouseOverTime: 400,
    mouseOutTime: 300
};
