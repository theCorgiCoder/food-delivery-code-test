import { ApiResponse } from "../types";

const BASE_URL = "https://food-delivery.umain.io/api/v1";

//filter data response structure
export interface FilterData {
  id: string;
  name: string;
  image_url: string;
}

export const fetchFilterById = async (
  id: string
): Promise<FilterData | null> => {
  try {
    const response = await fetch(
      `https://food-delivery.umain.io/api/v1/filter/${id}`
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(
        `Network response was not ok: ${response.status} ${errorMessage}`
      );
    }

    const data: FilterData = await response.json();
    console.log("Fetched filter data:", data);
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
