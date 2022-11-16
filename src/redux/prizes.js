import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  year: "none",
  allPrizes: [],
  prizes: [],
  page: 1,
  prizeAmount: 0
}
const prizesSlice = createSlice({
  name: "prizes",
  initialState,
  reducers: {
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setPrizes: (state, action) => {
      state.prizes = action.payload;
    },
    resetPrizes: (state, action) => {
      state.prizes = [];
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPrizeAmount: (state, action) => {
      state.prizeAmount = action.payload;
    },
    setAllPrizes: (state, action) => {
      state.allPrizes = action.payload;
    },
  }
});

export const { setYear, setPrizes, resetPrizes, setPage, setPrizeAmount, setAllPrizes } = prizesSlice.actions;
export default prizesSlice.reducer;