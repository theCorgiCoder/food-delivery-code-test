import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RestaurantModel } from "@/models/apiTypes";

interface RestaurantState {
  restaurants: RestaurantModel[];
  filteredRestaurants: RestaurantModel[];
  selectedRestaurant: RestaurantModel | null;
  selectedFilters: string[];
  restaurantLoading: boolean;
  restaurantError: string | null;
}

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

      console.log("Current selected filters:", state.selectedFilters);

      if (state.selectedFilters.includes(filterId)) {
        // If the filter is already selected, remove it
        state.selectedFilters = state.selectedFilters.filter(
          (id) => id !== filterId
        );
      } else {
        // If the filter is not selected, add it
        state.selectedFilters.push(filterId);
      }

      console.log("Updated selected filters:", state.selectedFilters);

      // Update filteredRestaurants based on selectedFilters
      if (state.selectedFilters.length > 0) {
        state.filteredRestaurants = state.restaurants.filter((restaurant) => {
          const matches = restaurant.filterIds.some((id) =>
            state.selectedFilters.includes(id)
          );
          console.log(`Restaurant ${restaurant.name} matches:`, matches); // Log matching status
          return matches;
        });
      } else {
        state.filteredRestaurants = state.restaurants; // Show all if no filters selected
      }
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
  setLoading,
  setError,
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
