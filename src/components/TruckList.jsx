import React from 'react';
import PropTypes from "prop-types";
import {TruckCard} from "./TruckCard.jsx";
import {useStatusMessage} from "../hooks/useStatusMessage.js";
import './TruckList.css';

export const TruckList = ({ list, query }) => {
    const message = useStatusMessage(list, query);
    return (
        <div className="results-container">
            {message && (
                <div className="status-container">
                    <p className="status">{message}</p>
                </div>
            )}
            {list.map((item) =>
                <TruckCard
                    key={item.objectid}
                    applicant={item.applicant}
                    facilitytype={item.facilitytype}
                    fooditems={item.fooditems}
                    latitude={item.latitude}
                    locationdescription={item.locationdescription}
                    longitude={item.longitude}
                    query={query}
                    objectid={item.objectid}
                />)}
        </div>
    );
};

TruckList.propTypes = {
    query: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
        applicant: PropTypes.string,
        facilitytype: PropTypes.string,
        fooditems: PropTypes.string,
        locationdescription: PropTypes.string,
        query: PropTypes.string,
        latitude: PropTypes.string,
        longitude: PropTypes.string,
        objectid: PropTypes.string,
    }))
}
