import React from 'react';
import {SearchForm} from "./SearchForm.jsx";
import {TruckList} from "./TruckList.jsx";
import {useLoadData} from "../hooks/useLoadData.js";

export const MainView = () => {
    const {
        query,
        bottomRef,
        searchResults,
        handleQueryChange,
        loading,
    } = useLoadData();

    return (
        <div>
            <SearchForm onSubmit={handleQueryChange}/>
            <TruckList list={searchResults} query={query} loading={loading}/>
            <div ref={bottomRef}/>
        </div>
    );
};