export const fetchOpenStatus = async (
  restaurantId: string
): Promise<boolean> => {
  try {
    const response = await fetch(
      `https://food-delivery.umain.io/api/v1/open/${restaurantId}`
    );
    const data = await response.json();
    return data.is_currently_open;
  } catch (error) {
    console.error("Error fetching open status:", error);
    return false;
  }
};
