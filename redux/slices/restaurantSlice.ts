import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RestaurantModel } from "@/models/apiTypes";

interface RestaurantState {
  restaurants: RestaurantModel[];
  filteredRestaurants: RestaurantModel[];
  selectedRestaurant: RestaurantModel | null;
  selectedFilter: string | null;
}

const initialState: RestaurantState = {
  selectedRestaurant: null,
  restaurants: [],
  filteredRestaurants: [],
  selectedFilter: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurants(state, action: PayloadAction<RestaurantModel[]>) {
      state.restaurants = action.payload;
      state.filteredRestaurants = action.payload;
    },
    setFilter(state, action: PayloadAction<string | null>) {
      const filterId = action.payload;

      // Check if the current filter is the same as the selected one
      if (state.selectedFilter === filterId) {
        // If the same filter is clicked again, clear the filter
        state.selectedFilter = null;
        state.filteredRestaurants = state.restaurants; // Show all restaurants
      } else {
        // Set the new filter and apply it
        state.selectedFilter = filterId;
        state.filteredRestaurants = state.restaurants.filter((restaurant) =>
          restaurant.filterIds.includes(filterId!)
        );
      }
    },
    selectRestaurant(state, action: PayloadAction<RestaurantModel | null>) {
      state.selectedRestaurant = action.payload;
    },
  },
});

export const { setRestaurants, setFilter, selectRestaurant } =
  restaurantSlice.actions;

// Export reducer
export default restaurantSlice.reducer;
