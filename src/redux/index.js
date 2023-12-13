import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './reducers/language.reducer';

const store = configureStore({
    reducer: { languages: languageReducer }
});

export default store;
