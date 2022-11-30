import { createSlice } from "@reduxjs/toolkit"

export interface CountryState {
    currentCountry: string,
} 

const initialState = {
    currentCountry: '',
}

const searchCountrySlice = createSlice({
    name: 'country',
    initialState,
    reducers : {
        searchCountry: (state, action) => {
            state.currentCountry = action.payload
        }
    }
})

export const { searchCountry } = searchCountrySlice.actions
export default searchCountrySlice.reducer