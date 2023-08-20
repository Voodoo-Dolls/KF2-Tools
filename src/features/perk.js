import { createSlice } from "@reduxjs/toolkit";

export const perkSlice = createSlice({
  name: "perk",
  initialState: {
    perkName: null,
    perkBonus: 0,
    perkLevel: 25,
  },
  reducers: {
    setPerkName: (state, action) => {
      state.perkName = action.payload;
    },

    setPerkBonus: (state, action) => {
      state.perkBonus = action.payload;
    },
    setPerkLevel: (state, action) => {
      state.perkLevel = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPerkName, setPerkBonus, setPerkLevel } = perkSlice.actions;

export default perkSlice.reducer;
