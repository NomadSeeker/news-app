import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppSyncThunk } from "./withTypes";
import { getApiNews } from "../api";

type Source = {
    id: string;
    name: string;
}

export type Article = {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

export type News = {
    articles: Article[]
}


type NewsState = {
    articles: Article[];
    status: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string | null
};

const initialState: NewsState = {
    articles: [],
    status: 'idle',
    error: null
};

export const fetchNews = createAppSyncThunk('news/fetchNews', async (url: string) => {
    const data = await getApiNews(url);
    return data;
});

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews(state, action: PayloadAction<News>) {
            state.articles = action.payload.articles;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchNews.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(fetchNews.fulfilled, (state, action) => {
            state.status = 'succeeded'
            //add the fetched news response form the api request
            state.articles = action.payload.articles;
        })
        .addCase(fetchNews.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message ?? 'Unknown Error';
        });
    }
});





export const {setNews} = newsSlice.actions;


