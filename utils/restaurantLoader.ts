import { useEffect, useState } from "react";
import { fetchRestaurants } from "./restaurantService";
import { RestaurantModel } from "@/models/apiTypes";

export const useRestaurantsLoader = () => {
  const [restaurants, setRestaurants] = useState<RestaurantModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurantsData = async () => {
      try {
        const fetchedRestaurants = await fetchRestaurants();
        setRestaurants(fetchedRestaurants);
      } catch (err) {
        setError("Failed to load restaurants");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurantsData();
  }, []);

  return { restaurants, loading, error };
};
