import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchFavMeals = createAsyncThunk('meals/fetchFavMeals', async (favMeals) => {
    const favoriteMeals = await Promise.all(
        favMeals.map( async (mealId) => {
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    
            return data['meals'][0];
        })
    )

    return favoriteMeals;
});

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        userFavoriteMeals: [],
        mealAddedAsFavorite: false,
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
        },
        mealAdded: (state, action) => {
            state.mealAddedAsFavorite = action.payload;    
        },
        setFavMeals: (state, action) => {
            state.userFavoriteMeals = action.payload;
        }
    },
    extraReducers: {
        [fetchFavMeals.pending]: (state) => {

        },
        [fetchFavMeals.rejected]: (state) => {

        },
        [fetchFavMeals.fulfilled]: (state, action) => {
            state.userFavoriteMeals = action.payload
        }
    }
});

export const {
    loginUser, mealAdded, setFavMeals
} = userSlice.actions;

export default userSlice.reducer;
