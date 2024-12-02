import axios from 'axios';
import React from 'react';

const apiUrl = 'https://newsapi.org/v2'
const apiKey = process.env.REACT_APP_API_KEY;


export const getApiNews = async (url: string) => {

    try {
        const res = await axios.get(`${apiUrl}/top-headlines?${url}`, {
            headers: {
                'X-Api-Key': apiKey
            }
        });

        if(!res)
            throw new Error(`No news found from fetched Api`);

        return res.data;
    }catch(err) {
        throw new Error(`Error fetching news from API: ${err}`);
    }
}