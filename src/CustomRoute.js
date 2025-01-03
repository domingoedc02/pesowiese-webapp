import React, { useState, useEffect } from 'react';
import { fetchApiData } from './api/api';
import {useLocation} from "react-router-dom"; // Import your axios-based API call

const WithData = ({ Component }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation(); // Get the location object
    const { pathname } = location; // Extract the pathname

    useEffect(() => {
        const getData = async () => {
            try {
                const apiData = await fetchApiData(pathname);
                setData(apiData);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Display loading indicator
    }

    return <Component data={data} />; // Render the component with fetched data
};

export default WithData;
