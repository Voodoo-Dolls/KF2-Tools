import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const perkSlice = createSlice({
  name: "perk",
  initialState: {
    perkName: null,
    perkBonus: 0,
  },
  reducers: {
    setPerkName: (state, action) => {
      state.perkName = action.payload;
    },

    setPerkBonus: (state, action) => {
      state.perkBonus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPerkName, setPerkBonus } = perkSlice.actions;

export default perkSlice.reducer;
