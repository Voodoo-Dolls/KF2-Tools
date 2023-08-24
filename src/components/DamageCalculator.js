import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PlayerBlock from "./PlayerBlock";
import ZedBlock from "../components/ZedBlock";
import { setBodyHealth, setHeadHealth } from "../features/zed";
import { setShotsFired } from "../features/weapon";

const DamageCalculator = () => {
  //Redux
  const { perkName, perkBonus, perkLevel } = useSelector((state) => state.perk);
  const { zedName, headHealth, bodyHealth, zedObject } = useSelector(
    (state) => state.zed
  );
  const { weaponName, weaponDamage, weaponUpgrade, weaponType, shotsFired } =
    useSelector((state) => state.weapon);
  const dispatch = useDispatch();
  //States
  const [weaponTypeMod, setWeaponTypeMod] = useState("0");
  const [damageDealt, setDamageDealt] = useState(0);

  //Events
  // In Zed component

  // CALCULATIONS

  function stageOne() {
    let damage = weaponDamage * (1 + perkBonus);
    stageTwo(damage);
  }
  // Future medic calcs
  function stageTwo(damage) {
    damage = Math.ceil(damage * 1);
    stageThree(damage);
  }

  //Hitzone
  function stageThree(damage) {
    damage = Math.floor(damage * zedObject["head-modifier"]);
    stageFour(damage);
  }
  //Damage Type
  function stageFour(damage) {
    damage = Math.floor(damage * zedObject["weapon-modifier"][weaponType]);
    dispatch(setHeadHealth(headHealth - damage));
    dispatch(setBodyHealth(bodyHealth - damage));
    dispatch(setShotsFired(shotsFired + 1));
    setDamageDealt(damage);
  }

  return (
    <div className="container">
      <p> Weapon Name: {weaponName}</p>
      <p> Weapon Upgrade: {weaponUpgrade}</p>
      <p> Weapon Damage: {weaponDamage}</p>
      <p> Weapon Type: {weaponType}</p>
      <p> Zed Name: {zedName}</p>
      <p> HeadHealth: {headHealth}</p>
      <p> BodyHealth: {bodyHealth}</p>
      <p>Damage Dealt: {damageDealt}</p>
      <p>Shots Fired: {shotsFired}</p>
      <PlayerBlock />
      <ZedBlock />
      <button onClick={stageOne}>HeadShot</button>
    </div>
  );
};

export default DamageCalculator;
