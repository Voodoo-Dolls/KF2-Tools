import Perk from "./Perk";
import Weapon from "./Weapon";
import "../../styles/PlayerBlock.css";
import { useSelector } from "react-redux";

const PlayerBlock = () => {
  const { perkName } = useSelector((state) => state.perk);
  return (
    <div className="border">
      <Perk />
      {perkName && (
        <>
          <h3>Weapon</h3>
          <div className="weapon_container">
            <Weapon />
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerBlock;
