import PlayerBlock from './PlayerBlock'
import '../components/ZedBlock'
import { useState } from 'react'
const DamageCalculator = () => {
    const [perkBonus, setPerkBonus] = useState(0);

    return ( 
        <>  
            <p>Current Perk Bonus Calculator: {perkBonus}</p>
            <PlayerBlock perkBonus={perkBonus} setPerkBonus={setPerkBonus}/>
        </>
     );
}
 
export default DamageCalculator;