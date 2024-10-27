import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "../types";
import { FilterModel } from "@/models/apiTypes";

const initialState: FiltersState = {
  filters: [],
  filtersLoading: false,
  filtersError: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<FilterModel[]>) {
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

export const { setFilters, setFiltersLoading, setFiltersError } =
  filtersSlice.actions;
export default filtersSlice.reducer;
