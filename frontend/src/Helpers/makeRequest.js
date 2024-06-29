import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_EXPRESS_SERVER_URL,
    withCredentials: true
});

const makeRequest = async (method, url, data = null) => {
    try {
        const response = await api({
            method,
            url,
            data
        });
        return response;
    } catch (error) {
        throw error;
    }
};

export default makeRequest;
