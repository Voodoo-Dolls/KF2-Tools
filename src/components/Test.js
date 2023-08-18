import data from '../data/test.json'
import { useState } from 'react';

const Test = () => {
    const[HP, setHP] = useState(100);

    function damage (number){
        setHP(HP - number)
    }
    return (
        <>
            <h2>Enemy HP: {HP}</h2>
            <button onClick={()=>damage(data.test[0]["test-damage"])}>Hit Me!</button>
            
        </>
      );
}
 
export default Test;