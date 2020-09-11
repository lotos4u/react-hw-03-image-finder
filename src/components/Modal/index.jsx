import React from 'react';

const Modal = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (e.target instanceof HTMLDivElement) {
            props.onClose(props.image.id);
        }
    }

    return <div className='Overlay' onClick={handleClick}>
        <div className='Modal'>
            <img src={props.image} alt={props.image}/>
        </div>
    </div>
}

export default Modal;