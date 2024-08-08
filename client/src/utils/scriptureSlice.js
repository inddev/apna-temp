import { createSlice } from "@reduxjs/toolkit";
import { scriptureData } from "../utils/scripturesData";

const initialState = {
  search: "",
  currentPage: 1,
  itemsPerPage: 8,
  selectedCategory: "All",
  sortBy: "",
  data: scriptureData,
};

const scriptureSlice = createSlice({
  name: "scripture",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { setSearch, setCurrentPage, setSelectedCategory, setSortBy } =
  scriptureSlice.actions;

export default scriptureSlice.reducer;
