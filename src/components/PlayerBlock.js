import "./Weapon";
import { useState } from "react";
import Perk from "../components/Perk";
import Weapon from "./Weapon";

const PlayerBlock = () => {
  return (
    <>
      <Perk />
      <Weapon />
    </>
  );
};

export default PlayerBlock;
