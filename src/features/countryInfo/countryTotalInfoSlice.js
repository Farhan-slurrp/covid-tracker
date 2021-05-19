import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: [],
  loading: false,
};

//fetch country data total
export const fetchCountryTotals = createAsyncThunk(
  "fetchUser",
  async (country) => {
    const res = await fetch(
      `https://covid-19-data.p.rapidapi.com/country?name=${country}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "29b005ea19msh3baf503f07071fbp125a9ajsn2b5d236f6a81",
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    return data;
  }
);

//fetch world data
const countryInfoSlicer = createSlice({
  name: "countryinfo",
  initialState,
  reducers: {
    setLoading: (state = initialState, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchCountryTotals.pending]: (state = initialState, action) => {
      state.loading = true;
    },
    [fetchCountryTotals.fulfilled]: (state = initialState, action) => {
      if (action.payload.length !== 0) {
        state.total = action.payload;
      } else {
        state.total = [{ msg: "Not found" }];
      }
      state.loading = false;
    },
    [fetchCountryTotals.rejected]: (state = initialState, action) => {
      state.total = [{ msg: "Too many request" }];
      state.loading = false;
    },
  },
});

//export action to dispatch in components
export const { setLoading } = countryInfoSlicer.actions;

//export state to store in components
export const CountryTotal = (state) => state.countryinfo.total;
export const Loading = (state) => state.countryinfo.loading;

//export reducer to call in store
export default countryInfoSlicer.reducer;
