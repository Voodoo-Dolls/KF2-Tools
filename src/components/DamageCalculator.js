import PlayerBlock from "./PlayerBlock";
import "../components/ZedBlock";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ZedBlock from "../components/ZedBlock";

const DamageCalculator = () => {
  const { perkName, perkBonus, perkLevel } = useSelector((state) => state.perk);
  const { zedName, headHealth, bodyHealth } = useSelector((state) => state.zed);

  return (
    <>
      <p>Redux Perk Name: {perkName}</p>
      <p>Redux Perk Bonus: {perkBonus}</p>
      <p>Redux Perk Level: {perkLevel}</p>
      <p>Redux Zed Name: {zedName}</p>
      <PlayerBlock />
      <ZedBlock />
    </>
  );
};

export default DamageCalculator;
