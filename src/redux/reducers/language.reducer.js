/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { languages: {}, selectedLanguage: ''};

const languageSlice = createSlice({
    name: 'languages',
    initialState,
    reducers: {
        addLanguage(state, action) {
            console.log("🚀 ~ file: language.reducer.js:11 ~ addLanguage ~ action:", action)
            state = action.payload
            return state;
        },
        selectLanguage(state, action) {
            state.selectedLanguage = action.selectedLanguage
            return state;
        }
    }
});

export const languageActions = languageSlice.actions;

export default languageSlice.reducer;
