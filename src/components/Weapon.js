import { useSelector, useDispatch } from "react-redux";
import weapons from "../data/weapons.json";
import { useState } from "react";
import {
  setWeaponName,
  setWeaponDamage,
  setWeaponType,
} from "../features/weapon";
const Weapon = () => {
  // Redux
  const { perkName } = useSelector((state) => state.perk);
  const dispatch = useDispatch();
  const { weaponName, weaponDamage, weaponType } = useSelector(
    (state) => state.weapon
  );
  // States
  const [weaponObject, setWeaponObject] = useState(null);
  const [weaponUpgrade, setWeaponUpgrade] = useState("Base");

  // Weapon Object Set Up
  //Get Weapon objects Based off of perk prop
  var weaponArray = weapons["weapon-list"].filter(function (weapon) {
    return weapon["Perks"].includes(perkName);
  });

  // Get an Array of Weapon names from Perk
  var weaponList = weaponArray.map((Arr) => {
    return Arr["weapon-name"];
  });

  //Select Event Handler

  const onWeaponSelect = (event) => {
    const value = event.target.value;
    if (value) {
      let index = weaponArray.findIndex((weapon) => {
        return weapon["weapon-name"] === value;
      });
      setWeaponObject(weaponArray[index]);
      setWeaponUpgrade("Base");
      dispatch(setWeaponUpgrade("Base"));
      dispatch(setWeaponName(value));
    }
  };

  const onUpgradeSelect = (event) => {
    const value = event.target.value;
    setWeaponUpgrade(value);
  };

  //Variables

  if (weaponObject) {
    dispatch(setWeaponDamage(weaponObject["damage/w"][weaponUpgrade][0]));
    dispatch(setWeaponType(weaponObject["damage-type"]));
  }

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
            {weaponArray.map((weapon) => (
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
