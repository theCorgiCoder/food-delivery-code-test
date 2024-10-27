//Filter Ids for matching filter bar
export const findFilters = {
  topRated: {
    id: "5c64dea3-a4ac-4151-a2e3-42e7919a925d",
    name: "Top Rated",
  },
  takeOut: {
    id: "c67cd8a3-f191-4083-ad28-741659f214d7",
    name: "Take Out",
  },
  fastDelivery: {
    id: "23a38556-779e-4a3b-a75b-fcbc7a1c7a20",
    name: "Fast Delivery",
  },
  eatIn: {
    id: "0017e59c-4407-453f-a5be-901695708015",
    name: "Eat In",
  },
};

// Get all filter IDs for easier reference
export const filterIds = Object.values(findFilters).map((filter) => filter.id);
