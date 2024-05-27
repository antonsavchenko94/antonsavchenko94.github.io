import React, {useCallback, useEffect, useState} from 'react';
import {SearchForm} from "./SearchForm.jsx";
import {TruckCard} from "./TruckCard.jsx";
import {LoadMoreButton} from "./LoadMoreButton.jsx";

const INITIAL_LIMIT = 15;
const DATA_ENDPOINT = 'https://data.sfgov.org/resource/rqzj-sfat.json'

export const MainView = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [currentLimit, setCurrentLimit] = useState(INITIAL_LIMIT);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleFormSubmit = useCallback(text => setSearchText(text.trim()), []);
    const isLoadMoreButtonVisible = currentLimit === searchResults.length;

    useEffect(() => {
        setLoading(true);
        if (searchText !== '') {
            const url = `${DATA_ENDPOINT}?status=APPROVED&$limit=${currentLimit}&$q=${encodeURIComponent(searchText)}`;
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then((data) => {
                    setSearchResults(data);
                    setLoading(false);
                });
        }
    }, [searchText, currentLimit]);

    const handleLoadMore = useCallback(() => {
        setCurrentLimit((prevState) => prevState + INITIAL_LIMIT)
    }, []);

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
            {isLoadMoreButtonVisible && <LoadMoreButton onClick={handleLoadMore} disabled={loading}/>}
        </div>
    );
};