import { useDispatch, useSelector } from "react-redux";
import perks from "../data/perks.json";
import { useState, useEffect } from "react";
import {
  setPerkName,
  setPerkBonus,
  setPerkWeapons,
  setPerkLevel,
} from "../features/perk";
import { setWeaponObject, setShotsFired } from "../features/weapon";

const Perk = () => {
  //Redux
  const dispatch = useDispatch();
  const { perkName, perkLevel, perkWeapons, perkBonus } = useSelector(
    (state) => state.perk
  );
  const { weaponName } = useSelector((state) => state.weapon);

  //States
  const [perkObject, setPerkObject] = useState(null);
  //Handles
  function perkChangeHandle(e) {
    const value = e.target.value;
    dispatch(setPerkName(value));
    if (value) {
      dispatch(setPerkBonus(0));
      dispatch(setPerkWeapons(value));
      dispatch(setShotsFired(0));
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
    dispatch(setShotsFired(0));
  }
  function handleLvlChange(e) {
    const value = e.target.value;
    dispatch(setPerkLevel(value));
  }

  //Confirms if current weapon is perk related, if not reset.
  useEffect(() => {
    if (perkObject) {
      if (!perkWeapons.some((weapon) => weapon["weapon-name"] === weaponName)) {
        dispatch(setWeaponObject(null));
      }
    } else {
      dispatch(setWeaponObject(null));
    }
  }, [perkObject]);

  useEffect(() => {
    if (perkObject) {
      let skills = Object.keys(skillObject)
        .map((lvl) => skillObject[lvl])
        .reduce((pv, cv) => pv + cv);
      dispatch(
        setPerkBonus(+perkLevel * perkObject["perk-level-bonus"] + skills)
      );
    }
  }, [perkLevel]);

  //Data
  const perkArray = perks["perk-list"];
  // JSX
  return (
    <div className="container">
      {/* PERKS */}
      <h3>Perk:</h3>

      <div className="perk_container">
        <select name="" id="" onChange={perkChangeHandle}>
          <option value={null}></option>
          {perkArray.map((perk) => (
            <option value={perk["perk-name"]} key={perk["perk-name"]}>
              {perk["perk-name"]}
            </option>
          ))}
        </select>
        <input
          type="number"
          defaultValue={25}
          min={1}
          max={25}
          onChange={handleLvlChange}
        />
        <p>Perk Bonus: {perkBonus}</p>
        <p>Perk Level: {perkLevel}</p>
      </div>
      {perkName && <h3>Skills:</h3>}
      <div className="skills_container">
        {perkName &&
          Object.keys(perkObject["Skills"]).map((lvl) => (
            <div className="skills" key={"skill" + lvl}>
              <select name="" id={lvl} onChange={handleSkillChange}>
                <option value={0} key={perkObject["Skills"]}>
                  {lvl}
                </option>
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
      </div>
    </div>
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
