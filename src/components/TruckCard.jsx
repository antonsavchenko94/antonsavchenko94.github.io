import React from 'react';
import PropTypes from "prop-types";
import {Highlighter} from "./Highlighter.jsx";
import './TruckCard.css';

const GOOGLE_MAP_URL = 'https://maps.google.com'

export const TruckCard = ({
    applicant,
    facilitytype,
    fooditems,
    locationdescription,
    latitude,
    longitude,
    query,
}) => {
    const handleRouteButtonClick = () => {
        window.open(`${GOOGLE_MAP_URL}?q=${latitude},${longitude}`);
    }
    return (
        <div className="card">
            <div className="card-content">
                <p><strong>Applicant:</strong> {applicant}</p>
                <p><strong>Facility Type:</strong> {facilitytype}</p>
                {fooditems && (
                    <div className="food-items">
                        <strong>Food Items:</strong>
                        <Highlighter mainString={fooditems} subString={query}/>
                    </div>
                )}
                {locationdescription && <p><strong>Location Description:</strong> {locationdescription}</p>}
            </div>
            <button className="card-button" onClick={handleRouteButtonClick}>Open Map</button>
        </div>
    );
};

TruckCard.propTypes = {
    applicant: PropTypes.string,
    facilitytype: PropTypes.string,
    fooditems: PropTypes.string,
    locationdescription: PropTypes.string,
    query: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string,
    objectid: PropTypes.string,
}
