import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchMeals = createAsyncThunk('meals/fetchMeals', async () => {
    const { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a');

    return data;
});

export const fetchMealsByCategory = createAsyncThunk('meals/fetchMealsByCategory', async (category) => {
    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);

    return data;
});

export const fetchMealsBySearchInput = createAsyncThunk('meals/fetchMealsBySearchInput', async (input) => {
    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);

    return data;
});

export const fetchMealById = createAsyncThunk('meals/fetchMealById', async (id) => {
    const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

    return data;
});

export const mealsSlice = createSlice({
    name: 'meals',
    initialState: {
        meals: [],
        meal: [],
    },
    reducers: {

    },
    extraReducers: {
        [fetchMeals.pending]: (state) => {

        },
        [fetchMeals.rejected]: (state) => {

        },
        [fetchMeals.fulfilled]: (state, action) => {
            state.meals = action.payload;
        },
        [fetchMealsByCategory.pending]: (state) => {

        },
        [fetchMealsByCategory.rejected]: (state) => {

        },
        [fetchMealsByCategory.fulfilled]: (state, action) => {
            state.meals = action.payload;
        },
        [fetchMealsBySearchInput.pending]: (state) => {

        },
        [fetchMealsBySearchInput.rejected]: (state) => {

        },
        [fetchMealsBySearchInput.fulfilled]: (state, action) => {
            state.meals = action.payload;
        },
        [fetchMealById.pending]: (state) => {
            
        },
        [fetchMealById.rejected]: (state) => {

        },
        [fetchMealById.fulfilled]: (state, action) => {
            state.meal = action.payload;
        }
    }
});

export const {

} = mealsSlice.actions;

export default mealsSlice.reducer;
