import React, {Component} from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from "./components/ImageGallery";
import GalleryLoader from "./components/Loader";
import Button from "./components/Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {getImages} from "./api/images";


class App extends Component {
    state = {
        images: [],
        page: 1,
        query: '',
        isLoading: false,
    };

    handleSearchImages(text) {
        this.setState(() => ({ page: 1}), () => this.setState({query: text}, () => this.loadImages(false)));
    };

    loadImages(more, callback) {
        this.setState({ isLoading: true }, () => {
            getImages(this.state.query, this.state.page).then((newImages) => {
                this.setState(() => {
                    return more ? { images: [...this.state.images, ...newImages] } : {images: [...newImages]};
                }, () => {
                    if (callback) {
                        callback();
                    }
                });
            }).catch(e => {
                console.warn(e);
            }).finally(() => this.setState({ isLoading: false }));
        });
    };

    handleLoadMore() {
        this.setState(() => ({ page: this.state.page + 1 }), () => {
            this.loadImages(true, () => {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            });
        });
    }

    render() {
        return <div className="App">
            <Searchbar onSubmit={(data) => this.handleSearchImages(data)}/>
            {this.state.isLoading ? <GalleryLoader/> : (
                <>
                    <ImageGallery images={this.state.images}/>
                    {this.state.images.length > 0 ? <Button onClick={() => this.handleLoadMore()}/> : ''}
                </>
            )}
        </div>
    }
}

export default App;
