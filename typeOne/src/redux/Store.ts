import { configureStore, Middleware } from "@reduxjs/toolkit";
import food from "./FoodSlice";
import user from "./userSlice";
export default configureStore({
  reducer: {
    food,
    user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
