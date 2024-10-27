import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RestaurantModel } from "@/models/apiTypes";
import { RestaurantState } from "../types";

const initialState: RestaurantState = {
  selectedRestaurant: null,
  restaurants: [],
  filteredRestaurants: [],
  selectedFilters: [],
  restaurantLoading: false,
  restaurantError: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurants(state, action: PayloadAction<RestaurantModel[]>) {
      state.restaurants = action.payload;
      state.filteredRestaurants = action.payload;
    },

    setFilter(state, action: PayloadAction<string>) {
      const filterId = action.payload;

      if (state.selectedFilters.includes(filterId)) {
        // If the filter is already selected, remove it
        state.selectedFilters = state.selectedFilters.filter(
          (id) => id !== filterId
        );
      } else {
        // If the filter is not selected, add it
        state.selectedFilters.push(filterId);
      }

      // Update filteredRestaurants based on selectedFilters
      state.filteredRestaurants =
        state.selectedFilters.length > 0
          ? state.restaurants.filter((restaurant) =>
              restaurant.filterIds.some((id) =>
                state.selectedFilters.includes(id)
              )
            )
          : state.restaurants; // Show all if no filters selected
    },

    clearFilters(state) {
      state.selectedFilters = [];
      state.filteredRestaurants = state.restaurants;
    },

    selectRestaurant(state, action: PayloadAction<RestaurantModel | null>) {
      state.selectedRestaurant = action.payload;
    },

    clearError(state) {
      state.restaurantError = null;
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.restaurantLoading = action.payload;
    },

    setError(state, action: PayloadAction<string | null>) {
      state.restaurantError = action.payload;
    },
  },
});

export const {
  setRestaurants,
  setFilter,
  selectRestaurant,
  clearError,
  clearFilters,
  setLoading,
  setError,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
