import weapons from '../data/weapons.json'
import { useState } from 'react';
const Weapon = (perk) => {

    // Weapon Object Set Up
    //Get Weapon objects Based off of perk prop
    var weaponArray = weapons["weapon-list"].filter(function (weapon){
        return weapon["Perks"].includes(perk["perk"]);
    });


    // Get an Array of Weapon names from Perk
    var weaponList = weaponArray.map((Arr)=>{
        return Arr["weapon-name"];
    });

    //Select Event Handler

    const onWeaponSelect = (event) =>{
        const value = event.target.value;
        if (value){
            let index = weaponArray.findIndex((weapon)=>{
                return weapon["weapon-name"] === value;
            })
            setWeaponObject(weaponArray[index]);

        }
    }

    const onUpgradeSelect =(event) =>{
        const value = event.target.value;
        setWeaponUpgrade(value);
    }

    //Variables
    // States
    const [weaponObject, setWeaponObject] = useState(null); //Sets object as First weapon in array
    const [weaponUpgrade, setWeaponUpgrade] = useState("Base")
    
    if(weaponObject){
        var weaponName = weaponObject['weapon-name'];
        var weaponDamage = weaponObject["damage/w"][weaponUpgrade][0];
        var weaponType = weaponObject["damage-type"];

    }

    return (  
        <>  
            {/* Checks if Perk is Selected */}
            {perk["perk"] &&
            <>
            <p>Perk: {perk["perk"]}</p>
            <p>Weapon:</p>
            <select name="weapon" id="wep" onChange={onWeaponSelect}>
                <option value="null"></option>
                {
                   weaponArray.map((weapon)=>(
                    <option value={weapon["weapon-name"]}>{weapon["weapon-name"]}</option>
                   ))
                }
            </select>
            
            </>

            }
            
            {
                weaponObject &&
                 <>
                    <p>Weapon Upgrade: {weaponUpgrade}</p>
                    <select name="" id="" onChange={onUpgradeSelect}>
                        {
                            Object.keys(weaponObject["damage/w"]).map((key)=>(
                                <option value={key}>{key}</option>
                            ))
                        }
                    </select>  
                    <p>Weapon Type: {weaponType}</p>
                    <p>Weapon Damage: {weaponDamage}</p>
                 </>
            }

        </>
    );
}
 
export default Weapon;