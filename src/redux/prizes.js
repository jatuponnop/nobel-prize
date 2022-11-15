import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  year: "none",
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
      setPrizeAmount(50);
    },
    resetPrizes: (state, action) => {
      state.prizes = [];
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPrizeAmount: (state, action) => {
      state.prizeAmount = action.payload;
    }
  }
});

export const { setYear, setPrizes, resetPrizes, setPage, setPrizeAmount } = prizesSlice.actions;
export default prizesSlice.reducer;