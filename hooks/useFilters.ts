// src/hooks/useFilters.ts
import { useState, useEffect } from "react";
import { BASE_URL } from "@/constants/urls";
import { FilterModel } from "@/models/apiTypes";
import { filterIds } from "@/constants/filters";

// Function to fetch a filter by its ID
const fetchFilterById = async (id: string): Promise<FilterModel | null> => {
  try {
    const response = await fetch(`${BASE_URL}filter/${id}`);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(
        `Network response was not ok: ${response.status} ${errorMessage}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching filter:", error.message);
    } else {
      console.error("Unknown error occurred while fetching filter");
    }
    return null;
  }
};

// Custom hook to load filters
export const useFilters = () => {
  const [filters, setFilters] = useState<FilterModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilters = async () => {
      setLoading(true); // Set loading to true at the start

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
        setError(null); // Clear error on successful fetch
      } catch (err) {
        setError("Failed to load filters"); // Set error message
      } finally {
        setLoading(false); // Set loading to false at the end
      }
    };

    fetchFilters();
  }, []);

  return { filters, loading, error };
};
