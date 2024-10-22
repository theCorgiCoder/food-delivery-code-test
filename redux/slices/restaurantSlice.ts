import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RestaurantModel } from "@/models/apiTypes";

interface RestaurantState {
  selectedRestaurant: RestaurantModel | null;
}

const initialState: RestaurantState = {
  selectedRestaurant: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    selectRestaurant(state, action: PayloadAction<RestaurantModel>) {
      state.selectedRestaurant = action.payload; // Set the selected restaurant
    },
    clearSelectedRestaurant(state) {
      state.selectedRestaurant = null; // Clear the selected restaurant
    },
  },
});

// Export actions and reducer
export const { selectRestaurant, clearSelectedRestaurant } =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
