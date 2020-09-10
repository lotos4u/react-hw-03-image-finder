import React, {Component} from 'react';
import ImageGalleryItem from "../ImageGalleryItem";

class ImageGallery extends Component {
    render() {
        return <ul className="ImageGallery">
            {this.props.images.map(i => <ImageGalleryItem key={i.id} image={i}/>)}
        </ul>
    }
}

export default ImageGallery;