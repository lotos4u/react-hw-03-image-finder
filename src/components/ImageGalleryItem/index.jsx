import React, {Component} from 'react';

class ImageGalleryItem extends Component {
    render() {
        return <li className="ImageGalleryItem">
            <img src={this.props.image.previewURL}
                 alt={this.props.image.previewURL}
                 className="ImageGalleryItem-image"/>
        </li>
    }
}

export default ImageGalleryItem;