import './Weapon'
import { useState } from 'react'
import Perk from '../components/Perk'
import Weapon from './Weapon';



const PlayerBlock = () => {
    const [perk, setPerk] = useState(null);
    const [reset, setReset] = useState(false);
    function handlePerk(event){
        const value = event.target.value;
        setPerk(value);
        if (!value){
            setReset(true);
        }
        else{
            setReset(false);
        }
        
    }

    return ( 
        <>  
            <Perk handle={handlePerk} perk={perk} reset={reset}/>
            {!reset && 
            <Weapon perk={perk}/>
            }
        </>
     );
}
 
export default PlayerBlock;