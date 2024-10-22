import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RestaurantModel } from "@/models/apiTypes";

interface RestaurantState {
  selected: RestaurantModel | null;
}

const initialState: RestaurantState = {
  selected: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    selectRestaurant(state, action: PayloadAction<RestaurantModel>) {
      state.selected = action.payload; // Set the selected restaurant
    },
    clearSelectedRestaurant(state) {
      state.selected = null; // Clear the selected restaurant
    },
  },
});

// Export actions and reducer
export const { selectRestaurant, clearSelectedRestaurant } =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
