import {useEffect, useState} from "react";

const DEFAULT_MESSAGE = 'Discover Your Next Meal Adventure';
const DATA_NOT_FOUND_MESSAGE = 'No data found. Try to find another meal.';
const LOAD_MESSAGE = 'Loading Meal';
const EMPTY_MESSAGE = '';

export const useStatusMessage = (list, query, loading) => {
    const [prevList, setPrevList] = useState(null);
    const [message, setMessage] = useState(DEFAULT_MESSAGE);

    useEffect(() => {
        if (loading) {
            setMessage(LOAD_MESSAGE);
        } else {
            if (prevList !== null && !list.length) {
                setMessage(DATA_NOT_FOUND_MESSAGE);
            }
            if (list.length) {
                setMessage(EMPTY_MESSAGE);
            }
            if (!query) {
                setMessage(DEFAULT_MESSAGE);
            }
        }

        setPrevList(list);
    }, [list, query, loading]);

    return message;
}