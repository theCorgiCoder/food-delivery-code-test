// src/hooks/useFetchRestaurantsAndFilters.ts
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setRestaurants,
  setError,
} from "@/redux/slices/restaurantSlice";
import { BASE_URL } from "@/constants/urls";
import { RootState } from "@/redux/store";

const useFetchRestaurantsAndFilters = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(
    (state: RootState) => state.restaurant.restaurants
  );
  const loading = useSelector(
    (state: RootState) => state.restaurant.restaurantLoading
  );
  const error = useSelector(
    (state: RootState) => state.restaurant.restaurantError
  );

  useEffect(() => {
    const fetchRestaurantsData = async () => {
      dispatch(setLoading(true));

      try {
        const response = await fetch(`${BASE_URL}restaurants`);
        if (!response.ok) {
          throw new Error("Error: Restaurant data not found.");
        }
        const data = await response.json();
        dispatch(setRestaurants(data.restaurants));
        dispatch(setError(null));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(setError(err.message));
        } else {
          dispatch(setError("An unknown error occurred."));
        }
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchRestaurantsData();
  }, [dispatch]);

  return { restaurants, loading, error };
};

export default useFetchRestaurantsAndFilters;
