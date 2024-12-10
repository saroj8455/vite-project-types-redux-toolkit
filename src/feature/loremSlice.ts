import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const LOREM_API = 'https://baconipsum.com/apiv1/?type=meat-and-filler';
interface LoremState {
  data: string[];
  loading: boolean;
  error: string | null;
}

const initialState: LoremState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk to fetch from API
export const fetchLoremData = createAsyncThunk(
  'lorem/fetchLoremData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(LOREM_API);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.message);
    }
  }
);

const loremSlice = createSlice({
  name: 'lorem',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoremData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLoremData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLoremData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default loremSlice;
