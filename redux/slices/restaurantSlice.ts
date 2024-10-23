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
      state.selectedFilter = action.payload;

      if (action.payload === null) {
        // If no filter is selected, show all restaurants
        state.filteredRestaurants = state.restaurants;
      } else {
        // Filter based on selected filterId
        state.filteredRestaurants = state.restaurants.filter((restaurant) =>
          restaurant.filterIds.includes(action.payload!)
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
