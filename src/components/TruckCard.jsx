import React, {useState} from 'react';
import PropTypes from "prop-types";
import {Highlighter} from "./Highlighter.jsx";
import './TruckCard.css';
import {Modal} from "./Modal.jsx";
import {GoogleMapComponent} from "./GoogleMap.jsx";

const GOOGLE_MAP_NAVIGATE_URL = 'https://www.google.com/maps/dir/'

export const TruckCard = ({
    applicant,
    facilitytype,
    fooditems,
    locationdescription,
    latitude,
    longitude,
    query,
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleCloseModal = () => setModalOpen(false);
    const handleClickNavigate = () => {
        window.open(`${GOOGLE_MAP_NAVIGATE_URL}?api=1&destination=${latitude},${longitude}`);
    }

    return (
        <>
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
                <button className="card-button" onClick={() => setModalOpen(true)}>View on map</button>
                <button className="card-button" onClick={handleClickNavigate}>Navigate</button>
            </div>
            <Modal onClose={handleCloseModal} isOpen={modalOpen}>
                <GoogleMapComponent lng={longitude} lat={latitude} />
            </Modal>
        </>
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
