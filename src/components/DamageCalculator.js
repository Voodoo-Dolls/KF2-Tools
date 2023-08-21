import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import PlayerBlock from "./PlayerBlock";
import ZedBlock from "../components/ZedBlock";
import zeds from "../data/zeds.json";

const DamageCalculator = () => {
  //Redux
  const { perkName, perkBonus, perkLevel } = useSelector((state) => state.perk);
  const { zedName, headHealth, bodyHealth } = useSelector((state) => state.zed);
  const { weaponName, weaponDamage, weaponUpgrade, weaponType } = useSelector(
    (state) => state.weapon
  );
  //States
  const [weaponTypeMod, setWeaponTypeMod] = useState("0.1");
  //Events
  // In Zed component

  return (
    <>
      {/* <p>Redux Perk Name: {perkName}</p>
      <p>Redux Perk Bonus: {perkBonus}</p>
      <p>Redux Perk Level: {perkLevel}</p> */}
      <p>Redux Weapon Name: {weaponName}</p>
      <p>Redux Weapon Upgrade: {weaponUpgrade}</p>
      <p>Redux Weapon Damage: {weaponDamage}</p>
      <p>Redux Weapon Type: {weaponType}</p>

      <p>Redux Zed Name: {zedName}</p>
      <PlayerBlock />
      {/* <ZedBlock /> */}
    </>
  );
};

export default DamageCalculator;
