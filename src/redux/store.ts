import { configureStore } from "@reduxjs/toolkit"
import filterRegionSlice from "./features/filterRegion/filterRegionSlice"
import searchCountrySlice from "./features/searchCountry/searchCountrySlice"

export const store = configureStore({
    reducer: {
        regionFilter: filterRegionSlice,
        countrySearch: searchCountrySlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch