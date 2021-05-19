import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//world data state
const initialState = {
  datas: {},
  loading: true,
};

//fetch world data total
export const fetchTotals = createAsyncThunk("fetchUser", async () => {
  const res = await fetch("https://covid-19-data.p.rapidapi.com/totals", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "29b005ea19msh3baf503f07071fbp125a9ajsn2b5d236f6a81",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    },
  });
  const data = await res.json();
  return data;
});

//fetch world data
const wordInfoSlicer = createSlice({
  name: "worldinfo",
  initialState,
  reducers: {
    setLoading: (state = initialState, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchTotals.pending]: (state = initialState, action) => {
      state.loading = true;
    },
    [fetchTotals.fulfilled]: (state = initialState, action) => {
      state.datas = action.payload;
      state.loading = false;
    },
    [fetchTotals.rejected]: (state = initialState, action) => {
      state.loading = false;
    },
  },
});

//export action to dispatch in components
export const { setLoading } = wordInfoSlicer.actions;

//export state to store in components
export const WorldInfo = (state) => state.worldinfo.datas;
export const Loading = (state) => state.worldinfo.loading;

//export reducer to call in store
export default wordInfoSlicer.reducer;
