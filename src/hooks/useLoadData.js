import {useCallback, useEffect, useState} from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";

const INITIAL_LIMIT = 20;
const DATA_ENDPOINT = 'https://data.sfgov.org/resource/rqzj-sfat.json'

const fetchData = async (query, limit) => {
    try {
        const url = `${DATA_ENDPOINT}?status=APPROVED&$limit=${limit}&$q=${encodeURIComponent(query)}`;
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.json();
    } catch (e) {
        console.info('Something went wrong');
    }
}


export const useLoadData = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [currentLimit, setCurrentLimit] = useState(INITIAL_LIMIT);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const requestData = async () => {
            if (query !== '') {
                setLoading(true);
                const data = await fetchData(query, currentLimit);
                setSearchResults(data);
                setLoading(false);
            }
        }
        requestData();
    }, [query, currentLimit]);

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

    const handleQueryChange = useCallback((query) => {
        setQuery(query.trim());
        setCurrentLimit(INITIAL_LIMIT);
        setSearchResults([]);
    }, []);

    return {
        query,
        bottomRef,
        searchResults,
        handleQueryChange,
        loading,
    }
}