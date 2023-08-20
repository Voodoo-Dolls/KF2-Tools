import { useSelector, useDispatch } from "react-redux";
import { setZedName, setHeadHealth, setBodyHealth } from "../features/zed";
import { useState } from "react";
import zeds from "../data/zeds.json";

const ZedBlock = () => {
  //Redux
  const { zedName, headHealth, bodyHealth } = useSelector((state) => state.zed);
  const dispatch = useDispatch();
  //States
  const [zedObject, setZedObject] = useState(null);
  //Data
  const zedArray = zeds["zed-list"];
  //Events
  function zedChange(e) {
    const value = e.target.value;
    dispatch(setZedName(value));
    setZedObject(zedArray.filter((zed) => zed["zed-name"] === value)[0]);
    console.log(zedObject);
  }
  return (
    <>
      <p>Zed:</p>
      <select name="" id="" onChange={zedChange}>
        <option value="null"></option>
        {zedArray.map((zed) => (
          <option value={zed["zed-name"]}>{zed["zed-name"]}</option>
        ))}
      </select>
    </>
  );
};

export default ZedBlock;
