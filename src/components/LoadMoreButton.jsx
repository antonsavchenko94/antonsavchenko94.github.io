import React from 'react';
import './LoadMoreButton.css';
import PropTypes from "prop-types";

export const LoadMoreButton = ({ onClick, disabled }) => {
    return (
        <div className="load-more-container">
            <button className="load-more-button" onClick={onClick} disabled={disabled}>Load more</button>
        </div>
    );
};

LoadMoreButton.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}