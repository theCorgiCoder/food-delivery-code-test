import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./slices/restaurantSlice";

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
