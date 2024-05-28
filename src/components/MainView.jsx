import React from 'react';
import {SearchForm} from "./SearchForm.jsx";
import {TruckCard} from "./TruckCard.jsx";
import {useLoadData} from "../hooks/useLoadData.js";

export const MainView = () => {
    const {
        query,
        bottomRef,
        searchResults,
        handleQueryChange
    } = useLoadData();

    return (
        <div>
            <SearchForm onSubmit={handleQueryChange}/>
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
                        query={query}
                        objectid={item.objectid}
                    />)}
            </div>
            <div ref={bottomRef} />
        </div>
    );
};