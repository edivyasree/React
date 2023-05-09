import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import Callus from "./components/Callus";
import HomeButton from "./components/HomeButton";

function App() {
	
return (
	<>
	<BrowserRouter>
	<Routes>
		<Route exact path="/" element={<Home/>}/>
		<Route exact path="/about" element={<About/>}/>
	  <Route exact path="/Help" element={<Help/>}/>
	  <Route exact path="/Callus" element={<Callus/>}/>
	  <Route exact path="/HomeButton" element={<HomeButton/>}/>
  </Routes>
	</BrowserRouter>
	</>
);
}

export default App;
