import { useDispatch, useSelector } from "react-redux";
import perks from "../data/perks.json";
import { useState, useEffect } from "react";
import { setPerkName, setPerkBonus, setPerkWeapons } from "../features/perk";
import {
  setWeaponName,
  setWeaponUpgrade,
  setWeaponObject,
} from "../features/weapon";

const Perk = () => {
  //Redux
  const { perkName, perkLevel } = useSelector((state) => state.perk);
  const { weaponName } = useSelector((state) => state.perk);
  const dispatch = useDispatch();

  //States
  const [perkObject, setPerkObject] = useState(null);

  //Handles
  function perkChangeHandle(e) {
    const value = e.target.value;
    dispatch(setPerkName(value));
    if (value) {
      dispatch(setPerkBonus(0));
      dispatch(setPerkWeapons(value));
      setPerkObject(perkArray.filter((perk) => perk["perk-name"] === value)[0]);
    } else {
      dispatch(setPerkBonus(0));
      setPerkObject(value);
    }
    skillObject = {
      "Lvl-5": 0,
      "Lvl-10": 0,
      "Lvl-15": 0,
      "Lvl-20": 0,
      "Lvl-25": 0,
    };
  }

  useEffect(() => {
    if (perkObject) {
      if (weaponName) {
        console.log("hello");
      }
    }
  }, [perkObject]);

  //Data
  const perkArray = perks["perk-list"];

  // Events
  function handleSkillChange(e) {
    const id = e.target.id;
    const value = e.target.value;
    skillObject[id] = +value;
    dispatch(
      setPerkBonus(
        Object.keys(skillObject)
          .map((lvl) => skillObject[lvl])
          .reduce((pv, cv) => pv + cv, 0) +
          perkLevel * perkObject["perk-level-bonus"]
      )
    );
  }

  // JSX
  return (
    <>
      <p>Perk: </p>
      <select name="" id="" onChange={perkChangeHandle}>
        <option value={null}></option>
        {perkArray.map((perk) => (
          <option value={perk["perk-name"]} key={perk["perk-name"]}>
            {perk["perk-name"]}
          </option>
        ))}
      </select>

      {perkName &&
        Object.keys(perkObject["Skills"]).map((lvl) => (
          <div key={"skill" + lvl}>
            <p>{lvl}</p>
            <select name="" id={lvl} onChange={handleSkillChange}>
              <option value={0} key={perkObject["Skills"]}></option>
              <option
                value={perkObject["Skills"][lvl]["left"]["damage-modifier"]}
                key={perkObject["Skills"][lvl]["left"]["skill-name"]}
                defaultValue={
                  perkObject["Skills"][lvl]["left"]["damage-modifier"]
                }
              >
                {perkObject["Skills"][lvl]["left"]["skill-name"]}
              </option>
              <option
                value={perkObject["Skills"][lvl]["right"]["damage-modifier"]}
                key={perkObject["Skills"][lvl]["right"]["skill-name"]}
                defaultValue={
                  perkObject["Skills"][lvl]["right"]["damage-modifier"]
                }
              >
                {perkObject["Skills"][lvl]["right"]["skill-name"]}
              </option>
            </select>
          </div>
        ))}
    </>
  );
};

var skillObject = {
  "Lvl-5": 0,
  "Lvl-10": 0,
  "Lvl-15": 0,
  "Lvl-20": 0,
  "Lvl-25": 0,
};

export default Perk;
