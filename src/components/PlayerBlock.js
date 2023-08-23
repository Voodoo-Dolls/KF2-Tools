import "./Weapon";
import Perk from "../components/Perk";
import Weapon from "./Weapon";
import "../styles/PlayerBlock.css";

const PlayerBlock = () => {
  return (
    <div className="border">
      <Perk />
      <Weapon />
    </div>
  );
};

export default PlayerBlock;
