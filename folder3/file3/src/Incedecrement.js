import React, { useState } from 'react';

import './increment.css';
function Incedecrement(){
let[num,setnum]=useState(0);
let click1=()=>{
    setnum(num+1);
}
let click2=()=>{
    setnum(num-1);
    if(num<0){
        alert("not valid")
    }
}
return(<>
    <div id="main">
     <h1>{num}
     </h1>
     <div id="abc">
     <button onClick={click1}>increase</button>
     <button onClick={click2}>decrease</button>
     </div>
   
    </div>
</>)
}
export default Incedecrement;