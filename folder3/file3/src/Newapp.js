import React, { useState } from 'react';
import './index.css';
let Newapp=()=>{
    let[id,setid]=useState({
        fname:'',
        mobno:'',
        email:'',
        address:''
    })
    function changed(event){
        let{name,value}=event.target;
setid((preval)=>{
    return {
        ...preval,
        [name]:value
    }
})
    }
return (<><div id="main">
    <h1>hello {id.fname}</h1>
    <p>my mob no is: {id.mobno}</p>
    <p>my email id {id.email}</p>
    <p> I am from {id.address}</p><div>
    Name:<input type="text " name="fname" value={id.fname} onChange={changed}placeholder="enter name"/>
    </div>
<br/><div>
     Mob no:<input type="number " name="mobno" value={id.mobno} onChange={changed} placeholder="enter mob no"/>
   </div><br/>
   <div>Email:<input type="email" name="email" value={id.email} onChange={changed} placeholder="enter email"/>
   </div><br/>
   <div> Address:<input type="text " name="address" value={id.address} onChange={changed} placeholder="enter address"/>
</div>
</div></>)
}
export default Newapp;