//Define types of data from API
export interface ErrorModel {
  error: boolean;
  message: string;
}

export interface FilterModel {
  id: string;
  name: string;
  image_url: string;
  error: ErrorModel;
}

export interface RestaurantModel {
  id: string;
  name: string;
  rating: number;
  filterIds: string[];
  image_url: string;
  delivery_time_minutes: number;
  filters?: FilterModel[];
  error: ErrorModel;
}

export interface openStatusModel {
  restaurant_id: string;
  is_currently_open: boolean;
}

export interface OpenModel {
  restaurant_id: string;
  is_currently_open: boolean;
}

// Redux state for restaurants
export interface RestaurantState {
  restaurants: RestaurantModel[];
  filteredRestaurants: RestaurantModel[];
  selectedRestaurant: RestaurantModel | null;
  selectedFilters: string[];
  restaurantLoading: boolean;
  restaurantError: string | null;
}

export interface FiltersState {
  filters: FilterModel[];
  filtersLoading: boolean;
  filtersError: string | null;
}

//Action Types
export const SET_FILTER = "SET_FILTER";
export const SET_RESTAURANTS = "SET_RESTAURANTS";
export const SELECT_RESTAURANT = "SELECT_RESTAURANT";

// Action interfaces for type safety
export interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: string | null;
}

export interface SetRestaurantsAction {
  type: typeof SET_RESTAURANTS;
  payload: RestaurantModel[];
}

export interface SelectRestaurantAction {
  type: typeof SELECT_RESTAURANT;
  payload: RestaurantModel | null;
}

// Union type of all possible restaurant actions
export type RestaurantActionTypes =
  | SetFilterAction
  | SetRestaurantsAction
  | SelectRestaurantAction;
