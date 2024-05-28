import React, {useState, memo} from 'react';
import './SearchForm.css';
import PropTypes from "prop-types";

export const SearchForm = memo(({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(query);
    };

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <label htmlFor="search-input">Search:</label>
                <input
                    id="search-input"
                    className="search-input"
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="What would you like to eat?"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    );
})

SearchForm.displayName = 'SearchForm';

SearchForm.propTypes = {
    onSubmit: PropTypes.func,
}
