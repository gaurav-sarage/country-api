import { createSlice } from "@reduxjs/toolkit";
import {
    showAllCountries,
    searchByCode,
    searchByRegion
} from './countriesAction';
import { act } from "react-dom/test-utils";

const initialState = {
    loading: false,
    countriesData: [],
    countrySearched: [],
    region: '',
    searchTerm: '',
    error: false,
    success: false,
    message: ''
};

export const countriesSlice = createSlice({
    name: 'countries',
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.success = false;
            state.error = false;
            state.message = '',
            state.countrySearched = [],
            state.region = ''
        },
        setRegion: (state, action) => {
            state.region = action.payload;
        },

        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(showAllCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.countriesData = action.payload;
                state.success = true;
            })
            .addCase(showAllCountries.rejected, (state, action) => {
                state.loading = false;
                state.countriesData = [],
                state.error = true;
                state.message = action.payload;
            })
            .addCase(searchByCode.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchByCode.fulfilled, (state, action) => {
                state.loading = false;
                state.countrySearched = action.payload;
                state.success = true;
            })
            .addCase(searchByCode.fulfilled, (state, action) => {
                state.loading = false;
                state.countrySearched = action.payload;
                state.success = true;
            })
            .addCase(searchByCode.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload;
                state.countrySearched = [];
            })
    }
})