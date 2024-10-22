import { configureStore } from "@reduxjs/toolkit";
import restaurantReducer from "./slices/restaurantSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    filters: filterReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
