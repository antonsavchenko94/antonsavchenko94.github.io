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
            <TruckList list={searchResults} query={query}/>
            <div ref={bottomRef}/>
        </div>
    );
};