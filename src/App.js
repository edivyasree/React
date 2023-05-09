import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";

function App() {
	
return (
	<>
	<BrowserRouter>
	<Routes>
		<Route exact path="/" element={<Home/>}/>
		<Route exact path="/about" element={<About/>}/>
	  <Route exact path="/Help" element={<Help/>}/>
  </Routes>
	</BrowserRouter>
	</>
);
}

export default App;
