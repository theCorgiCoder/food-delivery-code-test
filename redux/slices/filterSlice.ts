// redux/slices/filtersSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Filter {
  id: string;
  name: string;
  image_url: string;
}

interface FiltersState {
  filters: Filter[];
  filtersLoading: boolean;
  filtersError: string | null;
}

const initialState: FiltersState = {
  filters: [],
  filtersLoading: false,
  filtersError: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Filter[]>) {
      state.filters = action.payload;
      state.filtersLoading = false;
      state.filtersError = null;
    },

    setFiltersLoading(state, action: PayloadAction<boolean>) {
      state.filtersLoading = action.payload;
    },

    setFiltersError(state, action: PayloadAction<string | null>) {
      state.filtersError = action.payload;
    },
  },
});

// Export actions and reducer
export const { setFilters, setFiltersLoading, setFiltersError } =
  filtersSlice.actions;
export default filtersSlice.reducer;
