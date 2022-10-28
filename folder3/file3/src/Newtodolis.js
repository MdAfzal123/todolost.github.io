import React from 'react';
import './index.css';
function Newtodolis(props){

return(<><div>
    
    <li id="ide"><button id="btn" onClick={()=>{props.onselect(props.id)}}

    >cut</button> {props.text}</li>
</div>
    
</>)
}
export default Newtodolis;