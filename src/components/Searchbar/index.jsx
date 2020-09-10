import React, {useState} from 'react';

const Searchbar = (props) => {

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            return;
        }
        props.onSubmit(text);
    }

    const handleOnChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    return <header className="Searchbar">
        <form className="SearchForm" onSubmit={(e) => handleSubmit(e)}>
            <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
            </button>

            <input
                value={text}
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                onChange={(e) => handleOnChange(e)}
            />
        </form>
    </header>
}

export default Searchbar;