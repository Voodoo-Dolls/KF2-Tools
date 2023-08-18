import zeds from '../data/zeds.json'

const ZedBlock = ({zedName}) => {
    var zedObject = zeds["zed-data"].filter(function(el){
        return el["zed-name"] === zedName;
    })
    zedObject = zedObject[0];
    return ( 
        <>
        <div className="zed-container">
            <h2>{zedObject["zed-name"]}</h2>
            <p>Head Health:{zedObject["head-health"]}</p>
            <p>Body Health:</p>
        </div>
        </>
     );
}
 
export default ZedBlock;