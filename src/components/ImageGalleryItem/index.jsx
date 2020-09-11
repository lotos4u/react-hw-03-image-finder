import React from 'react';

const ImageGalleryItem = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.onClick(props.image.id);
    }

    return <li className="ImageGalleryItem">
        <img onClick={(e) => handleClick(e)}
             src={props.image.webformatURL}
             alt={props.image.webformatURL}
             className="ImageGalleryItem-image"/>
    </li>
}

export default ImageGalleryItem;