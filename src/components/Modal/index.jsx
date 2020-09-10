import React, {Component} from 'react';

class Modal extends Component {
    render() {
        console.log(this.props.image);
        return <div className="Overlay">
            <div className="Modal">
                <img src="" alt="" />
            </div>
        </div>
    }
}

export default Modal;