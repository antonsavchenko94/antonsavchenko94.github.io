import React, {useEffect, useState, memo} from 'react';
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

    useEffect(() => {
        console.info('Form Rendered')
    });

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <label>
                    Search:
                    <input
                        className="search-input"
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="What would you like to eat?"
                    />
                </label>
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    );
})

SearchForm.displayName = 'SearchForm';

SearchForm.propTypes = {
    onSubmit: PropTypes.func,
}
