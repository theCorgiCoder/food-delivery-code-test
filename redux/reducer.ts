import {
  RestaurantState,
  RestaurantActionTypes,
  SET_FILTER,
  SET_RESTAURANTS,
  SELECT_RESTAURANT,
} from "./types";

// Initial state for restaurants
const initialState: RestaurantState = {
  restaurants: [],
  filteredRestaurants: [],
  selectedFilter: null,
  selectedRestaurant: null,
};

// Reducer function
export const restaurantReducer = (
  state = initialState,
  action: RestaurantActionTypes
): RestaurantState => {
  switch (action.type) {
    case SET_FILTER:
      const filterId = action.payload;
      const filteredRestaurants =
        filterId === null
          ? state.restaurants
          : state.restaurants.filter((restaurant) =>
              restaurant.filterIds.includes(filterId)
            );

      return {
        ...state,
        selectedFilter: filterId,
        filteredRestaurants,
      };

    case SET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
        filteredRestaurants:
          state.selectedFilter !== null
            ? action.payload.filter((restaurant) =>
                restaurant.filterIds.includes(state.selectedFilter!)
              )
            : action.payload,
      };

    case SELECT_RESTAURANT: // New case to handle selecting a restaurant
      return {
        ...state,
        selectedRestaurant: action.payload, // Store the selected restaurant
      };

    default:
      return state;
  }
};

export default restaurantReducer;
