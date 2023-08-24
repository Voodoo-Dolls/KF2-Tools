import { createSlice } from "@reduxjs/toolkit";
import weapons from "../data/weapons.json";

export const perkSlice = createSlice({
  name: "perk",
  initialState: {
    perkName: null,
    perkBonus: 0,
    perkLevel: 25,
    perkWeapons: null,
    zedTime: false,
  },
  reducers: {
    setPerkName: (state, action) => {
      state.perkName = action.payload;
    },

    setPerkBonus: (state, action) => {
      state.perkBonus = action.payload.toFixed(2);
    },
    setPerkLevel: (state, action) => {
      state.perkLevel = action.payload;
    },
    setPerkWeapons: (state, action) => {
      state.perkWeapons = weapons["weapon-list"].filter((weapon) => {
        return weapon["Perks"].includes(action.payload);
      });
    },
    setZedTime: (state, action) => {
      state.zedTime = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPerkName,
  setPerkBonus,
  setPerkLevel,
  setPerkWeapons,
  setZedTime,
} = perkSlice.actions;

export default perkSlice.reducer;
