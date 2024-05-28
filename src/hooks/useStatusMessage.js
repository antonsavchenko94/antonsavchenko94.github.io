import {useEffect, useState} from "react";

const DEFAULT_MESSAGE = 'Discover Your Next Meal Adventure';
const DATA_NOT_FOUND_MESSAGE = 'No data found. Try to find another meal.';
const EMPTY_MESSAGE = '';

export const useStatusMessage = (list, query) => {
    const [prevList, setPrevList] = useState(null);
    const [message, setMessage] = useState(DEFAULT_MESSAGE);

    useEffect(() => {
        if (prevList !== null && !list.length) {
            setMessage(DATA_NOT_FOUND_MESSAGE);
        }
        if (list.length) {
            setMessage(EMPTY_MESSAGE);
        }
        if (!query) {
            setMessage(DEFAULT_MESSAGE);
        }

        setPrevList(list);
    }, [list, query]);

    return message;
}