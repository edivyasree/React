import React from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom"

const Home = () => {
const navigate = useNavigate();
	
return (
	<>
		<h1 style={{color:"green"}}>Home</h1>
		<button onClick={()=>navigate("/about")}>About</button>
		<button onClick={()=>navigate("/Help")}>Help</button>
		<button onClick={()=>navigate("/Callus")}>callus</button>
    <NavLink to="/HomeButton">HomeButton</NavLink>
    </>
)
};

export default Home;
