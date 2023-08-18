import '../components/WeaponBlock'
import zeds from '../data/zeds.json'
import { useState } from 'react'
import perks from '../data/perks.json'
import WeaponBlock from '../components/WeaponBlock';

const WeaponCalculator = () => {
    // Zed Object Set Up
    var zedObject = zeds['zed-list'][0];
    var zedName = zedObject['zed-name'];
    const [headHealth, setheadHealth] = useState(zedObject["head-health"]);
    const [bodyHealth, setBodyHealth] = useState(zedObject["body-health"]);
    // Perk Object Set Up
    var perkObject = perks["perk-list"][0];
    var perkName = perkObject["perk-name"];

    return ( 
        <>  
            <WeaponBlock/>
            {/* <p>Zed: {zedName}</p>
            <p>Head Health: {headHealth}</p>
            <p>Body Health: {bodyHealth}</p> */}
        </>
     );
}
 
export default WeaponCalculator;