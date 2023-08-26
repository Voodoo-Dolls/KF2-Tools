import { useSelector, useDispatch } from "react-redux";
import {
  setZedName,
  setHeadHealth,
  setBodyHealth,
  setZedObject,
} from "../../features/zed";
import { setShotsFired } from "../../features/weapon";
import HealthBar from "./HealthBar";
import { useEffect } from "react";
import zeds from "../../data/zeds.json";

const ZedBlock = (damageDealt) => {
  //Redux
  const { zedName, zedObject } = useSelector((state) => state.zed);

  const { shotsFired } = useSelector((state) => state.weapon);

  const dispatch = useDispatch();
  //States
  //Data
  const zedArray = zeds["zed-list"];
  //Events
  function zedChange(e) {
    const value = e.target.value;
    dispatch(setZedName(value));
    dispatch(
      setZedObject(zedArray.filter((zed) => zed["zed-name"] === value)[0])
    );
  }
  useEffect(() => {
    try {
      dispatch(setHeadHealth(zedObject["head-health"]));
      dispatch(setBodyHealth(zedObject["body-health"]));
      dispatch(setShotsFired(0));
    } catch (e) {}
  }, [zedName]);

  return (
    <>
      {zedObject && (
        <>
          <img src={require(`../../images/zeds/${zedName}.webp`)} alt="" />
          <HealthBar />
        </>
      )}
      <div className="details">
        <select name="" id="" onChange={zedChange}>
          <option value="null">Select a Zed</option>
          {zedArray.map((zed) => (
            <option value={zed["zed-name"]} key={zed["zed-name"]}>
              {zed["zed-name"]}
            </option>
          ))}
        </select>
        <p>Damage Dealt: {damageDealt.damageDealt}</p>
        <p>Shots Fired: {shotsFired}</p>
      </div>
    </>
  );
};

export default ZedBlock;
