import { configureStore } from "@reduxjs/toolkit"
import filterRegionSlice from "./features/filterRegion/filterRegionSlice"
import searchCountrySlice from "./features/searchCountry/searchCountrySlice"
import themeSlice from "./features/setTheme/themeSlice"

export const store = configureStore({
    reducer: {
        regionFilter: filterRegionSlice,
        countrySearch: searchCountrySlice,
        themeSwitcher: themeSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch