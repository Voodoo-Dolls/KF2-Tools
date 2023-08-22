import { useSelector, useDispatch } from "react-redux";
import weapons from "../data/weapons.json";
import { useState, useEffect } from "react";
import {
  setWeaponName,
  setWeaponDamage,
  setWeaponType,
  setWeaponUpgrade,
  setWeaponObject,
} from "../features/weapon";
const Weapon = () => {
  // Redux
  const { perkName, perkWeapons } = useSelector((state) => state.perk);
  const dispatch = useDispatch();
  const { weaponName, weaponDamage, weaponType, weaponUpgrade, weaponObject } =
    useSelector((state) => state.weapon);
  // States

  const onWeaponSelect = (event) => {
    const value = event.target.value;
    if (value) {
      dispatch(
        setWeaponObject(
          perkWeapons[
            perkWeapons.findIndex((weapon) => weapon["weapon-name"] === value)
          ]
        )
      );

      dispatch(setWeaponUpgrade("Base"));
    }
  };

  useEffect(() => {
    if (weaponObject) {
      dispatch(setWeaponDamage(weaponObject["damage/w"]["Base"][0]));
      console.log(weaponObject);
    } else {
      dispatch(setWeaponDamage(null));
      dispatch(setWeaponUpgrade(null));
      dispatch(setWeaponUpgrade(null));
    }
  }, [weaponObject]);

  const onUpgradeSelect = (event) => {
    const value = event.target.value;
    dispatch(setWeaponUpgrade(value));
    dispatch(setWeaponDamage(weaponObject["damage/w"][value][0]));
  };

  //Variables

  // if (weaponObject) {
  //   dispatch(setWeaponDamage(weaponObject["damage/w"][weaponUpgrade][0]));
  //   dispatch(setWeaponType(weaponObject["damage-type"]));
  //   console.log('hello');
  // }

  // setWeaponObject(weaponArray[index]);
  // dispatch(setWeaponUpgrade("+1"));
  // dispatch(setWeaponDamage(weaponObject["damage/w"][weaponUpgrade][0]));
  // dispatch(setWeaponType(weaponObject["damage-type"]));

  return (
    <>
      {/* Checks if Perk is Selected */}
      {perkName && (
        <>
          <p>Weapon:</p>
          <select name="weapon" id="wep" onChange={onWeaponSelect}>
            <option value="null"></option>
            {perkWeapons.map((weapon) => (
              <option value={weapon["weapon-name"]} key={weapon["weapon-name"]}>
                {weapon["weapon-name"]}
              </option>
            ))}
          </select>
        </>
      )}

      {weaponObject && (
        <>
          <p>Weapon Upgrade: {weaponUpgrade}</p>
          <select name="" id="" onChange={onUpgradeSelect}>
            {Object.keys(weaponObject["damage/w"]).map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}
          </select>
          <p>Weapon Type: {weaponType}</p>
          <p>Weapon Damage: {weaponDamage}</p>
        </>
      )}
    </>
  );
};

export default Weapon;
