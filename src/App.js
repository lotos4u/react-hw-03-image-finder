import React, {Component} from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from "./components/ImageGallery";
import GalleryLoader from "./components/Loader";
import Button from "./components/Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {getImages} from "./api/images";
import Modal from "./components/Modal";


class App extends Component {
    state = {
        images: [],
        page: 1,
        query: '',
        isLoading: false,
        showFull: null,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot) {
            setTimeout(() => {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            }, 0);
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return this.state.images.length > prevState.images.length;
    }

    handleSearchImages(text) {
        this.setState(() => ({page: 1}), () => this.setState({query: text}, () => this.loadImages(false)));
    };

    loadImages(more, callback) {
        this.setState({isLoading: true}, () => {
            getImages(this.state.query, this.state.page).then((newImages) => {
                this.setState(() => {
                    return more ? {images: [...this.state.images, ...newImages]} : {images: [...newImages]};
                }, () => {
                    if (callback) {
                        callback();
                    }
                });
            }).catch(e => {
                console.warn(e);
            }).finally(() => this.setState({isLoading: false}));
        });
    };

    handleLoadMore() {
        this.setState(() => ({page: this.state.page + 1}), () => {
            this.loadImages(true);
        });
    }

    handleImageClick = (id) => {
        const image = this.state.images.find(i => i.id === id);
        this.setState({ showFull: (image ? image.largeImageURL : null) });
    }

    handleCloseModal = () => {
        this.setState({ showFull: null });
    }

    handleCloseModalEsc = (e) => {
        if (e.code === 'Escape') {
            this.handleCloseModal();
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleCloseModalEsc);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseModalEsc);
    }

    render() {
        return <div className="App">
            <Searchbar onSubmit={(data) => this.handleSearchImages(data)}/>
            {this.state.query ? <>
                <ImageGallery images={this.state.images} onClick={(id) => this.handleImageClick(id)}/>
                {this.state.images.length > 0  && !this.state.isLoading ? <Button onClick={() => this.handleLoadMore()}/> : ''}
            </> : ''}
            {this.state.isLoading ? <GalleryLoader/> : ''}
            {this.state.showFull ? <Modal image={this.state.showFull} onClose={() => this.handleCloseModal()}/> : ''}
        </div>
    }
}

export default App;
