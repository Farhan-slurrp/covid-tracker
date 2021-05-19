import { configureStore } from "@reduxjs/toolkit";
import WorldReducer from "../features/worldInfo/wordInfoSlicer";
import CountryReducer from "../features/countryInfo/countryTotalInfoSlice";

export default configureStore({
  reducer: {
    worldinfo: WorldReducer,
    countryinfo: CountryReducer,
  },
});
