import "./Weapon";
import Perk from "../components/Perk";
import Weapon from "./Weapon";
import "../styles/PlayerBlock.css";
import { useSelector } from "react-redux";

const PlayerBlock = () => {
  const {perkName} = useSelector((state)=>state.perk)
  return (
    <div className="border">
      <Perk />
      {perkName &&
      <>
      <h3>Weapon</h3>
      <div class="weapon_container"><Weapon/></div>
      </>
    }
      
    </div>
  );
};

export default PlayerBlock;
