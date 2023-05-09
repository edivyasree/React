import React from 'react';
import {useNavigate} from "react-router-dom"

const Home = () => {
const navigate = useNavigate();
	
return (
	<>
		<h1 style={{color:"green"}}>Home</h1>
		<button onClick={()=>navigate("/about")}>About</button>
	    <button onClick={()=>navigate("/Help")}>Help</button>
    </>
)
};

export default Home;
