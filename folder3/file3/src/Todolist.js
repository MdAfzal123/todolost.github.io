import React, { useState } from 'react';
import Newtodolis from './Newtodolis';
import './index.css';
let Todolist=()=>{
    let[item,setitem]=useState();
    let[additem,setadditem]=useState([])
    let changed=(event)=>{
      setitem(event.target.value)
    }
    let clicked=()=>{
        setadditem((preval)=>{
            return [...preval,item]
        })
        setitem("");
    }
    let delclicked=(id)=>{
        console.log("deleted")
        setadditem((preval)=>{
            return preval.filter((arrelem,index)=>{
            return index!==id
            })
        })
    }
return(<>
    <div id='main'>
        <div id="pie"><p>ToDo List</p></div>
        <div><br/>
            <input id="input" type="text" placeholder='add an item'onChange={changed}/>
            <button onClick={clicked}>+</button>
        </div>
        <ul id='uli'>
            {additem.map((val,index)=>{
                return <li><Newtodolis
                    text={val}
                    id={index}
                    key={index}
                    onselect={delclicked}
                /></li>
            })}
        </ul>
    </div>
</>)
}
export default Todolist;