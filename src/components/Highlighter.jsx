import React from 'react';
import './Highlighter.css';

export const Highlighter = ({ mainString, subString }) => {
    const highlightSimilarSubstrings = () => {
        const regex = new RegExp(`(${subString})`, 'gi');
        const parts = mainString.split(regex);
        return parts.map((part, index) => {
            if (part.toLowerCase() === subString.toLowerCase()) {
                return <span key={index} className="highlight">{part}</span>;
            } else {
                return part;
            }
        });
    };

    return (
        <div>
            {highlightSimilarSubstrings()}
        </div>
    );
}