import React, { useState } from 'react';
import './index.css';
function App(){
    let[fname,setfname]=useState({
        fullname:'',
        mobno:'',
        email:''
    });
    function changed(event){
        let{name,value}=event.target;
        setfname((preval)=>{
            if(name==="fullname"){
                return({
                    fullname:value,
                    mobno:preval.mobno,
                    email:preval.email
            })
            }
            else if(name==="mobno"){
                return({
                    fullname:preval.fullname,
                    mobno:value,
                    email:preval.email 
                } 
                )
            }
            else {
                return({
                    fullname:preval.fullname,
                    mobno:preval.mobno,
                    email:value  
            })
            }

        }        
        )

        }
    
        return(
        <div id="main">
            <h1>Hello {fname.fullname}</h1><br/>
            <p>mob no. is {fname.mobno}</p><br/>
            <p>email is {fname.email}</p>
            <input type='text' placeholder='enter your name' onChange={changed} name="fullname" value={fname.fullname} />
            <br/><input type="number" placeholder="enter mob no"  onChange={changed} name="mobno" value={fname.mobno}/>
            <br/><input type="email" placeholder="enter your email"  onChange={changed} name="email" value={fname.email}/>
            
        </div>
    )
}
export default App;