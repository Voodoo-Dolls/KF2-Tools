import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PlayerBlock from "./PlayerBlock";
import ZedBlock from "../components/ZedBlock";
import HealthBar from "./HealthBar";
import { setBodyHealth, setHeadHealth } from "../features/zed";
import { setShotsFired } from "../features/weapon";
import "../styles/ZedBlock.css";

const DamageCalculator = () => {
  //Redux
  const { perkName, perkBonus, perkLevel, focusStacks } = useSelector(
    (state) => state.perk
  );
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
    let damage = Math.ceil(weaponDamage * (+perkBonus + 1));
    stageTwo(damage);
  }

  //Future Focus Buffs
  function stageTwo(damage) {
    damage = Math.ceil(damage * (1 + 0.05 * parseInt(focusStacks)));
    stageThree(damage);
  }

  //Hitzone
  function stageThree(damage) {
    damage = Math.floor(damage * zedObject["head-modifier"]);
    stageFour(damage);
  }

  function stageFour(damage) {
    damage = Math.floor(damage * zedObject["weapon-modifier"][weaponType]);
    if (headHealth != 0) {
      dispatch(setShotsFired(shotsFired + 1));
    }
    dispatch(setHeadHealth(headHealth - damage));
    dispatch(setBodyHealth(bodyHealth - damage));
    setDamageDealt(damage);
  }

  useEffect(() => {
    if (headHealth == 0 && zedObject) {
      let calc = damageDealt + zedObject["body-health"] * 0.25;
      console.log(calc);
      stageTwo(calc);
    }
  }, [headHealth]);

  return (
    <div className="container">
      <div className="zed_block_container">
        <ZedBlock damageDealt={damageDealt} />
        <div className="button_container">
          <button onClick={stageOne}>Head Shot</button>
          <button>Body Shot (Not Working)</button>
        </div>
      </div>
      <PlayerBlock />
    </div>
  );
};

export default DamageCalculator;
