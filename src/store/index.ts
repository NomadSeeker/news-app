import {configureStore} from '@reduxjs/toolkit';
import { newsSlice } from './news';

export const store = configureStore({
    reducer: {
        news: newsSlice.reducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

