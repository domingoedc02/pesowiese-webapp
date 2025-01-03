import axios from 'axios'; // Import axios

const API_URL = process.env.REACT_APP_SERVER_BASEURL;

export const fetchApiData = async (pathname) => {
    console.log(API_URL)
    try {
        const response = await axios.get(`${API_URL}${pathname}`); // Replace with your actual API endpoint
        console.log(response)
        return response.data; // axios automatically parses the JSON response
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to be handled by the calling function
    }
};
