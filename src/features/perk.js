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
    focusStacks: 0,
    rackStacks: 0,
    skillArray: 0,
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
    setFocusStacks: (state, action) => {
      state.focusStacks = action.payload;
    },
    setRackStacks: (state, action) => {
      state.rackStacks = action.payload;
    },
    setSkillArray: (state, action) => {
      let array = [];
      let keys = Object.keys(action.payload);
      keys.forEach((key) => {
        array.push(action.payload[key][1]);
      });
      state.skillArray = [];
      state.skillArray = array;
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
  setFocusStacks,
  setRackStacks,
  setSkillArray,
} = perkSlice.actions;

export default perkSlice.reducer;
