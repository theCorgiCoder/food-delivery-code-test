import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RestaurantModel } from "@/models/apiTypes";

interface RestaurantState {
  restaurants: RestaurantModel[];
  filteredRestaurants: RestaurantModel[];
  selectedRestaurant: RestaurantModel | null;
  selectedFilters: string[];
}

const initialState: RestaurantState = {
  selectedRestaurant: null,
  restaurants: [],
  filteredRestaurants: [],
  selectedFilters: [],
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurants(state, action: PayloadAction<RestaurantModel[]>) {
      state.restaurants = action.payload;
      state.filteredRestaurants = action.payload;
    },
    // setFilter(state, action: PayloadAction<string | null>) {
    //   const filterId = action.payload;

    //   if (filterId === null) {
    //     //clears selected filter
    //     state.filteredRestaurants = state.restaurants;
    //     state.selectedFilters = [];
    //   } else if (state.selectedFilters.includes(filterId)) {
    //     // If the same filter is clicked again, clear the filter
    //     state.selectedFilters = state.selectedFilters.filter(
    //       (id) => id !== filterId
    //     );
    //     state.filteredRestaurants = state.restaurants.filter((restaurant) =>
    //       restaurant.filterIds.some((id) => state.selectedFilters.includes(id))
    //     );
    //   } else {
    //     // Add new filter to selected filters
    //     state.selectedFilters.push(filterId);
    //     state.filteredRestaurants = state.restaurants.filter((restaurant) =>
    //       restaurant.filterIds.includes(filterId)
    //     );
    //   }
    // },
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
      if (state.selectedFilters.length > 0) {
        state.filteredRestaurants = state.restaurants.filter((restaurant) =>
          restaurant.filterIds.some((id) => state.selectedFilters.includes(id))
        );
      } else {
        state.filteredRestaurants = state.restaurants; // Show all restaurants if no filters are selected
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
