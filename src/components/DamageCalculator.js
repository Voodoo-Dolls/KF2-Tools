import PlayerBlock from "./PlayerBlock";
import "../components/ZedBlock";
import { useState } from "react";
import { useSelector } from "react-redux";

const DamageCalculator = () => {
  const { perkName, perkBonus } = useSelector((state) => state.perk);
  const [pperkBonus, setPperkBonus] = useState(0);

  return (
    <>
      <p>Redux Perk Name: {perkName}</p>
      <p>Redux Per Bonus: {perkBonus}</p>
      <p>Current Perk Bonus Calculator</p>
      <PlayerBlock />
    </>
  );
};

export default DamageCalculator;
