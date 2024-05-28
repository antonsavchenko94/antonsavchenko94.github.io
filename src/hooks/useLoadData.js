import {useCallback, useEffect, useState} from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";

const INITIAL_LIMIT = 20;
const DATA_ENDPOINT = 'https://data.sfgov.org/resource/rqzj-sfat.json'


export const useLoadData = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [currentLimit, setCurrentLimit] = useState(INITIAL_LIMIT);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');

    const requestData = () => {
        if (searchText !== '') {
            setLoading(true);

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
    }

    useEffect(() => {
        requestData();
    }, [searchText, currentLimit]);

    const handleLoadMore = useCallback(() => {
        setCurrentLimit((prevState) => prevState + INITIAL_LIMIT)
    }, []);

    const [bottomRef] = useInfiniteScroll({
        loading,
        hasNextPage: currentLimit === searchResults.length,
        onLoadMore: handleLoadMore,
        disabled: false,
        rootMargin: '0px 0px 400px 0px',
    });

    return {
        setSearchText,
        searchResults,
        searchText,
        bottomRef,
    }
}