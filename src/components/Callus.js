import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
function Callus(props){
const navigate=useNavigate()
console.log(navigate);
const location=useLocation()
console.log(location);
     const [name,setname]=useState("divya")
    return(
        <div>
          <h1>Users page</h1>
      <p>{location.pathname}</p>
      <p>{new URLSearchParams(location.search).get('name')}</p>   
     <h1>8774212120</h1>
        </div>
    )
}
export default Callus