// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChangePassword from './components/ChangePassword';
import DonateClothes from './components/DonateClothes';
import Donate from './components/Donate';
import Signin from './components/Signin';
import DonorProfile from './components/DonorProfile';
import DonateGadgets from './components/DonateGadgets';
import DonateFootware from './components/DonateFootware';
import DonateStationary from './components/DonateStationary';
import DonateHealth from './components/DonateHealth';
import DonorProfilePage from './components/MedicalCamp';
import BloodCamp from './components/BloodCamp';
import Educational from './components/Educational';
import NavToogle from './components/NavToggle';
import EducationalAwarness from './components/EducationalAwarness';
import LocalStorage1 from './components/LocalStorage1';


function App() {
  return (
    <div className="App">
      {/* <EducationalAwarness/> */}
{/* <BloodCamp/> */}
{/* <Educational /> */}
{/* <DonorProfilePage/> */}
{/* <NavToogle/> */}
<BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/signup' element={<Signup/>}/>
    <Route exact path='/Login' element={<Login/>}/>
    <Route exact path='/ChangePassword' element={<ChangePassword/>}/>
<Route exact path='/DonorProfile' element={<DonorProfile/>}/>
<Route exact path="/DonateFood" element={<Donate/>}/>
<Route  exact path="/DonateClothes" element={<DonateClothes/>}/>
<Route exact path='/DonateGadgets' element={<DonateGadgets/>}/>
<Route exact path="/DonateFootware" element={<DonateFootware/>}/>
<Route exact path='/DonateHealth' element={<DonateHealth/>}/>
<Route exact path="/DonateStationary" element={<DonateStationary/>}/>

  </Routes>
</BrowserRouter>
{/* <LocalStorage1/> */}
    </div>
  );
}

export default App;
