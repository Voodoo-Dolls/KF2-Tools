import perks from '../data/perks.json'


const Perk = ({handle}, perk) => {
    const perkArray = perks["perk-list"];
    

    return ( 
        <>
            <p>Perk:</p>
            <select name="" id="" onChange={handle}>
                <option value={null}></option>
                    {   
                        perkArray.map((perk)=>(
                        <option value={perk["perk-name"]}>{perk["perk-name"]}</option>
                            ))
                    }
            </select>
        </>
    );
}
 
export default Perk;