'use strict';

import React from 'react';

export default class PictureSelect extends React.Component {

    onChange(e) {
        this.props.onChange(e.currentTarget.selectedPictures);
    }

    renderInfoText() {
      return (
        <div className='col-xs-12 col-sm-12 col-md-12'>
            {this.props.infoText}
        </div>
        );
    }

    renderSelected(index) {
      const {selectedPictures} = this.props;
      return (
        <div className='picture-selected' style={(selectedPictures.contains(this.props.pictureUrls[index])) ? this.props.selectedColor : {}}>
            <i className="icon-save" style={{position:'relative', top: 'calc(50% - 45px)', left: 'calc(50% - 50px)', fontSize: '70px', color: '#FFFFFF'}}></i>
        </div>
      );
    }
    
    render() {
      const pictureUrls = this.props.pictureUrls;
      const selectedPictures = this.props.selectedPictures;
        return (
            <div>
              {this.props.infoText ? this.renderInfoText() : null}
              {pictureUrls.map((url, index) => (
                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-3' key={`picture-select-id-${index}`}>
                     <div className='picture-select-wrapper' onClick={() => this.props.onSelect(index)}>
                          {(selectedPictures.contains(this.props.pictureUrls[index])) ? this.renderSelected(index) : null}
                          <img className='select-picture img-responsive' src={url}/>
                    </div>
                </div>
              ))}
            </div>
        );
    }
}