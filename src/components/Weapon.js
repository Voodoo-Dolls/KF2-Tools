import { useSelector, useDispatch } from "react-redux";
import weapons from "../data/weapons.json";
import { useState } from "react";
import {
  setWeaponName,
  setWeaponDamage,
  setWeaponType,
  setWeaponUpgrade
} from "../features/weapon";
const Weapon = () => {
  // Redux
  const { perkName, perkWeapons } = useSelector((state) => state.perk);
  const dispatch = useDispatch();
  const { weaponName, weaponDamage, weaponType, weaponUpgrade } = useSelector(
    (state) => state.weapon
  );
  // States
  const [weaponObject, setWeaponObject] = useState(null);


  const onWeaponSelect = (event) => {
    const value = event.target.value;
    if (value) {
      if (value){
        console.log("No value");
      }
      setWeaponObject(perkWeapons[perkWeapons.findIndex((weapon)=>{
        return weapon["weapon-name"] === value;
      })]);
      dispatch(setWeaponDamage(perkWeapons[perkWeapons.findIndex((weapon)=>{
        return weapon["weapon-name"] === value;
      })]["damage/w"]["Base"][0]));
      dispatch(setWeaponUpgrade("Base"));
      dispatch(setWeaponName(value));
      console.log(value);
      return;
    }
  };

  const onUpgradeSelect = (event) => {
    const value = event.target.value;
    dispatch(setWeaponUpgrade(value));
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

      {(weaponObject && weaponUpgrade && perkName && weaponName) && (
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
