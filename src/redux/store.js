import { configureStore } from '@reduxjs/toolkit'
import potentialCountriesReducer from './slices/potentialCountriesSlice.js'
import displayedCountryReducer from './slices/displayCountrySlice.js'

export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayedCountryReducer
    }
})