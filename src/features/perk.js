import { createSlice } from "@reduxjs/toolkit";
import weapons from "../data/weapons.json";

export const perkSlice = createSlice({
  name: "perk",
  initialState: {
    perkName: "asd",
    perkBonus: 0,
    perkLevel: 25,
    perkWeapons: null,
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
    setPerkWeapons: (state, action) => {
      state.perkWeapons = weapons["weapon-list"].filter((weapon) => {
        return weapon["Perks"].includes(action.payload);
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPerkName, setPerkBonus, setPerkLevel, setPerkWeapons } =
  perkSlice.actions;

export default perkSlice.reducer;
