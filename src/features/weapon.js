import { createSlice } from "@reduxjs/toolkit";

export const weaponSlice = createSlice({
  name: "weapon",
  initialState: {
    weaponName: null,
    weaponDamage: 0,
    weaponUpgrade: "Base",
    weaponType: null,
    weaponList: null,
    weaponObject: null,
    shotsFired: 0,
  },
  reducers: {
    setWeaponName: (state, action) => {
      state.weaponName = action.payload;
    },
    setWeaponDamage: (state, action) => {
      state.weaponDamage = action.payload;
    },
    setWeaponUpgrade: (state, action) => {
      state.weaponUpgrade = action.payload;
    },
    setWeaponType: (state, action) => {
      state.weaponType = action.payload;
    },
    setWeaponList: (state, action) => {
      state.weaponList = action.payload;
    },
    setWeaponObject: (state, action) => {
      state.weaponObject = action.payload;
    },
    setShotsFired: (state, action) => {
      state.shotsFired = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setWeaponName,
  setWeaponDamage,
  setWeaponUpgrade,
  setWeaponType,
  setWeaponList,
  setWeaponObject,
  setShotsFired,
} = weaponSlice.actions;

export default weaponSlice.reducer;
