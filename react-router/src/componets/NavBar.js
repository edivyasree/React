import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'
import Home from './Home'

export class NavBar extends Component {
  render() {
    return (
      <div>
     <BrowserRouter>
        <ul>
     <li><a>Home</a></li>
     <li><a>Aboutus</a></li>
     <li><a>Services</a></li>
   
     </ul>
   <Routes>
    <Route path='/'element={<Home />} />Home</Route>
    <Route path='/'element={<AboutUs/>} />AboutUs</Route>
    
   </Routes>
     </BrowserRouter>
      </div>
    )
  }
}

export default NavBar