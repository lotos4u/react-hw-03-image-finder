import React from 'react';
import Loader from 'react-loader-spinner'

const GalleryLoader = () => (
    <div className='Loader'>
        <Loader
            type="ThreeDots"
            color="#3f51b5"
            height={100}
            width={100}
            timeout={0}
        />
    </div>
);

export default GalleryLoader;