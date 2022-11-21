import { configureStore,Middleware } from "@reduxjs/toolkit";
import food from "./FoodSlice";
export default configureStore({
    reducer : {
        food,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
      }),
});