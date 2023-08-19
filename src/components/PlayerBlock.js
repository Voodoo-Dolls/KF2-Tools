import "./Weapon";
import { useState } from "react";
import Perk from "../components/Perk";
import Weapon from "./Weapon";

const PlayerBlock = (pperkBonus, { setPperkBonus }) => {
  const [perk, setPerk] = useState(null);
  const [reset, setReset] = useState(false);
  function handlePerk(event) {
    const value = event.target.value;
    setPerk(value);
    if (!value) {
      setReset(true);
      return;
    } else {
      setReset(false);
      return;
    }
  }

  return (
    <>
      <Perk
        handle={handlePerk}
        perk={perk}
        reset={reset}
        // perkBonus={perkBonus}
        // setPerkBonus={{ setPerkBonus }}
      />
      {/* {!reset && <Weapon perk={perk} />} */}
    </>
  );
};

export default PlayerBlock;
