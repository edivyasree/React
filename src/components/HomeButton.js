import React, { useState } from "react";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
function HomeButton(){
   const [name,setname]=useState(" ")
   const [password,setpassword]=useState(" ")
   const [arr,setarr]=useState([])
   const navigate=useNavigate()
   const handleClick=()=>{
    let obj={
        name:name,
        password:password,
    }
 console.log(obj);
    navigate('/Help');
   }
    return(
        <div>
        Name:<input type="text" placeholder="name" onChange={(e)=>setname(e.target.value)}/>
        Password:<input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={handleClick}>dwghj</button>
        </div>
    )
}
export default HomeButton