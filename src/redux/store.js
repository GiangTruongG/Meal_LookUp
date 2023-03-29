import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from './slices/mealSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        meals: mealsReducer,
        user: userReducer
    }
});
