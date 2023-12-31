import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import weapon, {
  setWeaponName,
  setWeaponDamage,
  setWeaponType,
  setWeaponUpgrade,
  setWeaponObject,
  setShotsFired,
} from "../../features/weapon";
const Weapon = () => {
  // Redux
  const { perkName, perkWeapons } = useSelector((state) => state.perk);
  const dispatch = useDispatch();
  const { weaponName, weaponDamage, weaponType, weaponUpgrade, weaponObject } =
    useSelector((state) => state.weapon);

  //Handles
  const onWeaponSelect = (event) => {
    const value = event.target.value;
    if (value) {
      dispatch(setWeaponName(value));
      dispatch(
        setWeaponObject(
          perkWeapons[
            perkWeapons.findIndex((weapon) => weapon["weapon-name"] === value)
          ]
        )
      );
      dispatch(setShotsFired(0));
    }
  };

  // AFTER WEAPON SELECTION
  useEffect(() => {
    if (weaponObject && weaponUpgrade === null) {
      dispatch(setWeaponUpgrade("Base"));
      dispatch(setWeaponDamage(weaponObject["damage/w"]["Base"][0]));
      dispatch(setWeaponType(weaponObject["damage-type"]));
    } else if (weaponObject && weaponUpgrade != null) {
      try {
        dispatch(setWeaponDamage(weaponObject["damage/w"][weaponUpgrade][0]));
        dispatch(setWeaponType(weaponObject["damage-type"]));
      } catch {
        dispatch(setWeaponUpgrade("Base"));
        dispatch(setWeaponDamage(weaponObject["damage/w"]["Base"][0]));
        dispatch(setWeaponType(weaponObject["damage-type"]));
      }
    } else {
      dispatch(setWeaponName(null));
      dispatch(setWeaponDamage(null));
      dispatch(setWeaponUpgrade(null));
      dispatch(setWeaponType(null));
    }
  }, [weaponObject]);

  const onUpgradeSelect = (event) => {
    const value = event.target.value;
    dispatch(setWeaponUpgrade(value));
    dispatch(setWeaponDamage(weaponObject["damage/w"][value][0]));
    dispatch(setShotsFired(0));
  };

  const handlePelletCount = (event) =>{
    const value = event.target.value;
      
    console.log(value);
  }

  return (
    <>
      {/* Checks if Perk is Selected */}
      {perkName && (
        <>
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
          <select name="" id="" onChange={onUpgradeSelect}>
            {Object.keys(weaponObject["damage/w"]).map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}
          </select>
          <img
            src={require(`../../images/weapons/${weaponName}.svg`)}
            alt="gun"
          />
            {weaponType!="Shotgun" &&
          <div className="weapon_damage">
            <p>Weapon Damage</p>
            <p className="bigBold">{weaponDamage}</p>
          </div>
            
            }
              {weaponType === "Shotgun" &&
                <div>
                            <div className="weapon_damage">
            <p>Weapon Damage</p>
            <p className="bigBold">{weaponDamage}</p>
            
          </div>
                  <p>Pellets Hit:</p>
                  <input type="number" min={1} max={weaponObject["pellet-count"]} defaultValue={weaponObject["pellet-count"]} onChange={handlePelletCount}/>
                </div>
              }
        </>
      )}
    </>
  );
};

export default Weapon;
