import {useCallback, useEffect, useState} from 'react'
import './App.css'
import {SearchForm} from "./components/SearchForm.jsx";
import {TruckCard} from "./components/TruckCard.jsx";
import {LoadMoreButton} from "./components/LoadMoreButton.jsx";

const INITIAL_LIMIT = 15;
const DATA_ENDPOINT = 'https://data.sfgov.org/resource/rqzj-sfat.json'

function App() {
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
                        longitude={item.longitude}
                        query={searchText}
                        objectid={item.objectid}
                    />)}
            </div>
            {isLoadMoreButtonVisible && <LoadMoreButton onClick={handleLoadMore} disabled={loading}/>}
        </div>
    )
}

export default App