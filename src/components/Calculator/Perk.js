import { useDispatch, useSelector } from "react-redux";
import perks from "../../data/perks.json";
import { useState, useEffect } from "react";
import {
  setPerkName,
  setPerkBonus,
  setPerkWeapons,
  setPerkLevel,
  setZedTime,
  setFocusStacks,
  setSkillArray,
  setRackStacks,
} from "../../features/perk";
import { setWeaponObject, setShotsFired } from "../../features/weapon";

const Perk = () => {
  //Redux
  const dispatch = useDispatch();
  const {
    perkName,
    perkLevel,
    perkWeapons,
    perkBonus,
    zedTime,
    rackStacks,
    skillArray,
  } = useSelector((state) => state.perk);

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
      "Lvl-5": [0, null],
      "Lvl-10": [0, null],
      "Lvl-15": [0, null],
      "Lvl-20": [0, null],
      "Lvl-25": [0, null],
    };
    dispatch(setSkillArray(skillObject));
    dispatch(setRackStacks(0));
  }

  function handleSkillChange(e) {
    const id = e.target.id;
    const value = e.target.value.split(",");
    const skill = e.target;
    skillObject[id][0] = +value[0];
    skillObject[id][1] = value[1];
    let total =
      skillObject["Lvl-5"][0] +
      skillObject["Lvl-10"][0] +
      skillObject["Lvl-15"][0] +
      skillObject["Lvl-20"][0];
    if (zedTime) {
      total = total + skillObject["Lvl-25"][0];
      dispatch(
        setPerkBonus(
          total + rackStacks * 0.1 + perkLevel * perkObject["perk-level-bonus"]
        )
      );
    } else {
      dispatch(
        setPerkBonus(
          total + rackStacks * 0.1 + perkLevel * perkObject["perk-level-bonus"]
        )
      );
    }
    dispatch(setSkillArray(skillObject));
    dispatch(setShotsFired(0));
  }

  function rackEmUp(skillArray) {
    if (skillArray) {
      if (skillArray.includes("Rack 'em Up")) {
        return (
          <div className="rack_container">
            <label htmlFor="rack">Rack Stacks</label>
            <input
              type="number"
              min={0}
              max={5}
              defaultValue={0}
              onChange={handleRack}
            />
          </div>
        );
      } else {
        return;
      }
    }
  }

  function handleLvlChange(e) {
    const value = e.target.value;
    dispatch(setPerkLevel(value));
  }

  function handleZedTime(e) {
    const value = e.target.checked;
    dispatch(setZedTime(value));
  }

  function handleFocus(e) {
    const value = e.target.value;
    dispatch(setFocusStacks(value));
  }

  function handleRack(e) {
    const value = e.target.value;
    dispatch(setRackStacks(value));
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
    if (perkObject && zedTime) {
      let skills = Object.keys(skillObject)
        .map((lvl) => skillObject[lvl][0])
        .reduce((pv, cv) => pv + cv);
      dispatch(
        setPerkBonus(
          +perkLevel * perkObject["perk-level-bonus"] +
            skills +
            rackStacks * 0.1
        )
      );
    } else if (perkObject && !zedTime) {
      let skills = Object.keys(skillObject)
        .map((lvl) => skillObject[lvl][0])
        .reduce((pv, cv) => pv + cv);
      dispatch(
        setPerkBonus(
          +perkLevel * perkObject["perk-level-bonus"] +
            (skills - skillObject["Lvl-25"][0]) +
            rackStacks * 0.1
        )
      );
    }
  }, [perkLevel, zedTime, perkObject, rackStacks]);

  //Reset Rack Stacks
  useEffect(() => {
    if (skillArray) {
      if (skillArray.includes("Rack 'em Up")) {
      } else {
        dispatch(setRackStacks(0));
      }
    }
  }, [skillArray]);
  //Data
  const perkArray = perks["perk-list"];
  // JSX
  return (
    <div className="container">
      {/* PERKS */}
      <h3>Perk</h3>
      <div className="perk_container">
        <div className="perkLevels">
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
        </div>
        <div className="details">
          <div className="perkBonus">
            <p>Perk Bonus</p>
            <p className="bigBold">{perkBonus}</p>
          </div>
          <div className="zed_time_container">
            <label htmlFor="zed_time">Zed Time</label>
            <input id="zed_time" type="checkbox" onChange={handleZedTime} />
          </div>
          <div className="focus">
            <label htmlFor="focus">Focus Stacks</label>
            <input
              type="number"
              defaultValue={0}
              min={0}
              max={4}
              onChange={handleFocus}
              id="focus"
            />
          </div>
          {rackEmUp(skillArray)}
        </div>
      </div>
      {/* SKILLS */}
      {perkName && <h3>Skills:</h3>}
      {perkName && (
        <div className="skills_container">
          {perkName &&
            Object.keys(perkObject["Skills"]).map((lvl) => (
              <div className="skills" key={"skill" + lvl}>
                <select name="" id={lvl} onChange={handleSkillChange}>
                  <option value={[0, null]} key={perkObject["Skills"]}>
                    {lvl}
                  </option>
                  <option
                    value={[
                      perkObject["Skills"][lvl]["left"]["damage-modifier"],
                      perkObject["Skills"][lvl]["left"]["skill-name"],
                    ]}
                    key={perkObject["Skills"][lvl]["left"]["skill-name"]}
                  >
                    {perkObject["Skills"][lvl]["left"]["skill-name"]}
                  </option>
                  <option
                    value={[
                      perkObject["Skills"][lvl]["right"]["damage-modifier"],
                      perkObject["Skills"][lvl]["right"]["skill-name"],
                    ]}
                    key={perkObject["Skills"][lvl]["right"]["skill-name"]}
                  >
                    {perkObject["Skills"][lvl]["right"]["skill-name"]}
                  </option>
                </select>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

var skillObject = {
  "Lvl-5": [0, null],
  "Lvl-10": [0, null],
  "Lvl-15": [0, null],
  "Lvl-20": [0, null],
  "Lvl-25": [0, null],
};

export default Perk;
