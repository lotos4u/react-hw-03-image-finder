import React from 'react';

const Button = (props) => {
    const handleOnClick = (e) => {
        e.preventDefault();
        props.onClick();
    };
    return <button className='Button' onClick={(e) => handleOnClick(e)}>Load more</button>
}

export default Button;