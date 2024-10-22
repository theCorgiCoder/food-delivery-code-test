//Define types of data from API
export interface FilterModel {
  id: string;
  name: string;
  image_url: string;
}

export interface RestaurantModel {
  id: string;
  name: string;
  rating: number;
  filterIds: string[];
  image_url: string;
  delivery_time_minutes: number;
  filters?: FilterModel[];
}

export interface openStatusModel {
  restaurant_id: string;
  is_currently_open: boolean;
}

export interface openErrorModel {
  error: boolean;
  reason: string;
}
