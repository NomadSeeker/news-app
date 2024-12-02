import { createAsyncThunk } from "@reduxjs/toolkit";

import { AppDispatch, RootState} from './index';

export const createAppSyncThunk = createAsyncThunk.withTypes<{
    state: RootState
    dispatch: AppDispatch
}>();