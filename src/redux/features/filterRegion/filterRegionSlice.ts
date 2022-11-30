import { createSlice } from "@reduxjs/toolkit"

export interface RegionState {
    currentRegion: string
}

const initialState: RegionState = {
    currentRegion: 'all',
}

const filterRegionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {
        changeRegion: (state, action) => {
            state.currentRegion = action.payload
        }
    }
})

export const { changeRegion } = filterRegionSlice.actions
export default filterRegionSlice.reducer