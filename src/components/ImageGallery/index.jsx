import React from 'react';
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = (props) => {
    const handleImageClick = (data) => {
        props.onClick(data);
    }

    return <ul className="ImageGallery">
        {props.images.map(i => <ImageGalleryItem key={i.id} image={i} onClick={handleImageClick}/>)}
    </ul>
}

export default ImageGallery;