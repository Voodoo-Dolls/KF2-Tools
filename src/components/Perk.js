import perks from "../data/perks.json";
import { useState } from "react";

const Perk = ({ handle }, perkBonus) => {
  //States
  const [perkObject, setPerkObject] = useState(null);
  const [perkState, setPerkState] = useState(null);
  const [skillBonus, setSkillBonus] = useState(0);
  //Handles
  function perkChangeHandle(event) {
    handle(event);
    const value = event.target.value;

    if (value) {
      setPerkState(true);
      setPerkObject(perkArray[0]);
      return;
    } else {
      setPerkState(false);
      setPerkObject(null);
      return;
    }
  }
  //Data
  const perkArray = perks["perk-list"];

  function handleSkillChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    skillObject[id] = +value;
    setSkillBonus(
      Object.keys(skillObject)
        .map((lvl) => skillObject[lvl])
        .reduce((pv, cv) => pv + cv, 0)
    );
  }
  return (
    <>
      <p>Current Perk Bonus Perk Block: {perkBonus["perkBonus"]}</p>
      <p>Perk:{perkObject && perkObject["perk-name"]} </p>
      <select name="" id="" onChange={perkChangeHandle}>
        <option value={null}></option>
        {perkArray.map((perk) => (
          <option value={perk["perk-name"]} key={perk["perk-name"]}>
            {perk["perk-name"]}
          </option>
        ))}
      </select>

      {perkState &&
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
