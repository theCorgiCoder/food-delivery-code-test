import { BASE_URL } from "@/constants/urls";
import { FilterModel } from "@/models/apiTypes";

//Filter By ID Fetch
export const fetchFilterById = async (
  id: string
): Promise<FilterModel | null> => {
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
