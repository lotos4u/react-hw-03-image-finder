import React, {useState, useEffect} from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from "./components/ImageGallery";
import GalleryLoader from "./components/Loader";
import Button from "./components/Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {getImages} from "./api/images";


const App = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchImages = (text) => {
        console.log('before update', query);
        setPage(0);
        setQuery(query);
    };

    useEffect(() => {
        loadMore();
    }, [query])

    useEffect(() => {
        loadMore();
    }, [page])

    const loadMore = (callback) => {
        console.log('query=', query);
        setIsLoading(true);
        getImages(query, page).then((newImages) => {
            setImages([...images, ...newImages]);
            if (callback) {
                callback();
            }
        }).catch(e => {
            console.warn(e);
        }).finally(() => setIsLoading(false));
    };

    const handleLoadMore = () => {
        setPage(page + 1);
        loadMore(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        });
    }
    return <div className="App">
        <Searchbar onSubmit={handleSearchImages}/>
        {isLoading ? <GalleryLoader/> : (
            <>
                <ImageGallery images={images}/>
                {images.length > 0 ? <Button onClick={handleLoadMore}/> : ''}
            </>
        )}

    </div>
}

export default App;
