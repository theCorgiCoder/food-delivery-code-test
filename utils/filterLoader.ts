import { useState, useEffect } from "react";
import { fetchFilterById } from "./filterService";
import { FilterModel } from "@/models/apiTypes";
import { filterIds } from "@/constants/Filters";

export const useFiltersLoader = () => {
  const [filters, setFilters] = useState<FilterModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const fetchedFilters = await Promise.all(
          filterIds.map(async (id) => await fetchFilterById(id))
        );
        // Filter out any null values from fetchedFilters
        setFilters(
          fetchedFilters.filter(
            (filter): filter is FilterModel => filter !== null
          )
        );
      } catch (err) {
        setError("Failed to load filters");
      } finally {
        setLoading(false);
      }
    };

    fetchFilters();
  }, []);

  return { filters, loading, error };
};
