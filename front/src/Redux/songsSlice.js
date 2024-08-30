// redux/songsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk to fetch songs from the API
export const fetchSongs = createAsyncThunk("songs/fetchSongs", async () => {
  const response = await axios.get(
    "https://addis-project-3typ.onrender.com/api/Song/allsongs",
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // This won't work unless the server allows it
      },
    }
  );
  return response.data;
});

const songsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.songs = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default songsSlice.reducer;
