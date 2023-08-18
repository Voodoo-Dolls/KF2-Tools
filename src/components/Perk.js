import perks from '../data/perks.json'
import { useState } from 'react';

const Perk = ({handle}) => {
    //States
    const [perkObject, setPerkObject] = useState(null);
    const [perkState, setPerkState] = useState(null);
    //Handles
    function perkChangeHandle(event){
        handle(event);
        const value = event.target.value;
        if (value){
            setPerkState(true);
        }
        else{
            setPerkState(false);
        }
    }
    //Data
    const perkArray = perks["perk-list"];
    

    return ( 
        <>
            <p>Perk:</p>
            <select name="" id="" onChange={perkChangeHandle}>
                <option value={null}></option>
                    {   
                        perkArray.map((perk)=>(
                        <option value={perk["perk-name"]}>{perk["perk-name"]}</option>
                        
                            ))
                    }
            </select>
            {perkState &&
            <>
                <p></p>
                <p>Skills:</p>
                <p>Lvl-5: </p>
                <p>Lvl-10:</p>
                <p>Lvl-15:</p>
                <p>Lvl-20:</p>
                <p>Lvl-25:</p>
            </>
            }
            
        </>
    );
}
 
export default Perk;