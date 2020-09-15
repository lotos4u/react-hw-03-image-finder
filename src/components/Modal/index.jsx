import React, {Component} from 'react';

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleCloseModalEsc);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseModalEsc);
    }

    handleClick(e) {
        e.preventDefault();
        if (e.target instanceof HTMLDivElement) {
            this.handleCloseModal();
        }
    }

    handleCloseModalEsc = (e) => {
        if (e.code === 'Escape') {
            this.handleCloseModal();
        }
    };

    handleCloseModal() {
        this.props.onClose(this.props.image.id);
    }

    render() {
        return <div className='Overlay' onClick={(e) => this.handleClick(e)}>
            <div className='Modal'>
                <img src={this.props.image} alt={this.props.image}/>
            </div>
        </div>
    }
}

export default Modal;