import React, {useState} from "react";


function Signin()
{
    const [username,setUsername]=useState("")
    const [password,SetPassword]=useState("")

    async function sign()
    {
        let item = {username,password}
        console.warn(item)
        let result = await fetch("http://192.168.3.97:8000/signin/",
        {method:'POST',
        body:JSON.stringify(item),
        headers:{"Content-Type":'application/json',
    "Accept":'application/json'}
    })
    const data = await result.json()
    console.log("Result:",data)
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Signin Here</h1>
            <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="Username"/><br></br>
            <input type='password' value={password} onChange={(e)=>SetPassword(e.target.value)} className="form-control" placeholder="Password"/><br></br>
            <button onClick={sign} className="btn btn-primary">Signin</button>
        </div>
    );

}

export default Signin;