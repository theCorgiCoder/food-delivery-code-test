import { BASE_URL } from "@/constants/urls";
import { RestaurantModel } from "@/models/apiTypes";

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

    return data.restaurants;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching filter:", error.message);
    } else {
      console.error("Unknown error occurred while fetching filter");
    }
    return [];
  }
};
