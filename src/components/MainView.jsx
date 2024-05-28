import React, {useCallback, lazy} from 'react';
import {SearchForm} from "./SearchForm.jsx";
import {TruckCard} from "./TruckCard.jsx";
import {useLoadData} from "../hooks/useLoadData.js";

const INITIAL_LIMIT = 15;
const DATA_ENDPOINT = 'https://data.sfgov.org/resource/rqzj-sfat.json'

export const MainView = () => {
    const {
        setSearchText,
        searchResults,
        searchText,
        bottomRef,
    } = useLoadData();

    const handleFormSubmit = useCallback(text => setSearchText(text.trim()), []);

    return (
        <div>
            <SearchForm onSubmit={handleFormSubmit}/>
            <div className="results-container">
                {searchResults.map((item) =>
                    <TruckCard
                        key={item.objectid}
                        applicant={item.applicant}
                        facilitytype={item.facilitytype}
                        fooditems={item.fooditems}
                        latitude={item.latitude}
                        locationdescription={item.locationdescription}
                        longitude={item.longitude}
                        query={searchText}
                        objectid={item.objectid}
                    />)}
            </div>
            <div ref={bottomRef} />
        </div>
    );
};