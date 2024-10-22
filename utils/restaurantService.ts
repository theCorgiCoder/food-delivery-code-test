import { BASE_URL } from "@/constants/urls";
import { FilterModel, RestaurantModel } from "@/models/apiTypes";
import { fetchFilterById } from "./filterService";

export const fetchRestaurants = async (): Promise<RestaurantModel[]> => {
  try {
    const response = await fetch(`${BASE_URL}restaurants`);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(
        `Network response was not ok: ${response.status} ${errorMessage}`
      );
    }

    const data = await response.json();

    // Fetch all filters and attach them to the restaurant data
    const restaurantsWithFilters = await Promise.all(
      data.restaurants.map(async (restaurant: RestaurantModel) => {
        const filterPromises = restaurant.filterIds.map((id) =>
          fetchFilterById(id)
        );
        const fetchedFilters = await Promise.all(filterPromises);

        // Filter out any null values from fetchedFilters
        restaurant.filters = fetchedFilters.filter(
          (filter): filter is FilterModel => filter !== null
        );
        return restaurant;
      })
    );

    return restaurantsWithFilters;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching filter:", error.message);
    } else {
      console.error("Unknown error occurred while fetching filter");
    }
    return [];
  }
};
