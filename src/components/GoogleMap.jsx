import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import PropTypes from "prop-types";

const loader = new Loader({
    apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
});

export const GoogleMapComponent = ({ lat, lng}) => {
    const googleMapRef = useRef(null);

    useEffect(() => {
        const loadMap = async () => {
            if (googleMapRef.current) {
                const position = { lat: +lat, lng: +lng }
                const defaultMapOptions = {
                    center: position,
                    zoom: 15
                };
                const { Map} = await loader.importLibrary('maps');
                const { Marker } = await loader.importLibrary('marker');
                const map = new Map(googleMapRef.current, defaultMapOptions);
                new Marker({
                    map,
                    position,
                })
            }
        }
        loadMap();
    }, []);


    return <div ref={googleMapRef} style={{ width: '100%', height: '400px' }} />;
};

GoogleMapComponent.propTypes = {
    lat: PropTypes.string,
    lng: PropTypes.string,
}