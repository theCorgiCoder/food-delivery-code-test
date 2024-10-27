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
