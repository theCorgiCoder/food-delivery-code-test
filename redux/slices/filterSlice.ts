// redux/slices/filtersSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Filter {
  id: string;
  name: string;
  image_url: string;
}

interface FiltersState {
  filters: Filter[];
}

const initialState: FiltersState = {
  filters: [], // Initialize with an empty array
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Filter[]>) {
      state.filters = action.payload;
    },
  },
});

// Export actions and reducer
export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
