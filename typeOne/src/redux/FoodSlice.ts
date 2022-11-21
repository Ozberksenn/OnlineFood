import { createSlice } from "@reduxjs/toolkit";

export const FoodSlice = createSlice({
  name: "food",
  initialState: {
    footerInfo: [],
  },
  reducers: {
    setFood: (state, action: any) => {
      let isItemAdded = false;
      if (state.footerInfo.length > 0) {
        state.footerInfo.map((e: any) => {
          if (e._id === action.payload._id) {
            isItemAdded = true;
            e.count += 1;
            console.log(e);
          }
        });

        if (isItemAdded === false) {
          action.payload.count = 1;
          state.footerInfo.push(action.payload);
        }
      } else {
        action.payload.count = 1;
        state.footerInfo.push(action.payload);
      }
    },
    deleteFood: (state, action: any) => {
      if (state.footerInfo.length > 0) {
        state.footerInfo.map((e: any) => {
          if (e._id === action.payload._id) {
            if (e.count === 0) {
              console.log("nothing");
            } else {
              e.count -= 1;
            }
          }
        });
      }
    },
    order: (state, action) => {
      state.footerInfo = action.payload;
    },
  },
});
export const { setFood, deleteFood, order } = FoodSlice.actions;

export default FoodSlice.reducer;
