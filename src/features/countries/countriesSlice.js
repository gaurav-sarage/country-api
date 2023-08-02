import { createSlice } from "@reduxjs/toolkit";
import { showAllCountries } from "./countriesAction";

const initialState = {
    loading: false,
    countriesData: [],
    countryData: [],
    error: false,
    success: false,
    message: ''
}

export const countriesSlice = createSlice({
    name: "countries",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.success = false;
            state.error = false;
            state.message = '';
        },
        extraReducers: (builder) => {
            builder.addcase(showAllCountries.pending, (state) => {
                state.loading = true;
            })
            .addcase(showAllCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.countriesData = action.payload;
                state.success = true
            })
            .addcase(showAllCountries.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload;
                state.countriesData = [];
            })            
        }
    }
})

export default countriesSlice.reducer;