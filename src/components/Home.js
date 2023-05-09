import React from 'react'
import Footer from './Footer'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import foodcard from '../Images/foodcard.png'
import clothes from '../Images/clothes.jpg'
import health from '../Images/health.jpg'
import stationary from '../Images/stationary.jpg'
import gadgets from '../Images/gadgets.jpg'
import footware from '../Images/footware.jpg'
import clothdonation from '../Images/clothdonation.jpg'
import volunter from '../Images/volunterrspng.jpg'
import firstiamge from '../Images/firstavathar.jpg'
import secondimg from '../Images/Ellipse 3.jpg'
import thirdimg from '../Images/Ellipse 4.jpg'
import fourthimg from '../Images/Ellipse 5.jpg'
import fifthimg from '../Images/Ellipse 6.jpg'
import hands from '../Images/hands.png'
import women from '../Images/GroupWomen.jpg'
import markgray from '../Images/markgray.jpg'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,

    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
function Home() {
    return (
        <div className='col-md-12 col-lg-12 col-12'>
            <div class="container-fluid">
                <div className='hands  mb-4 '>

                    <div className='hands1 '>
                        <div class="container text-center mt-4 " >
                            <div class="row">
                                <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                                    <nav class="navbar mb-5 ">
                                        <div>

                                            <a class="navbar-brand ms-5" href="#">About us</a>
                                            <a class="navbar-brand pe-5 me-5 " href="#">Contact us</a>
                                            <a class="navbar-brand me-5 pe-5 mx-5" href="# " style={{
                                                color: 'black',
                                                font: "normal normal normal 22px/35px Blacksword",
                                                fontStyle: "italic",

                                                opacity: " 1",
                                            }}>Helping Hands</a>
                                            <a class="navbar-brand ps-5 me-5 mx-5" href="#">Blog</a>
                                            <a class="navbar-brand me-5" href="#">Event</a>

                                            <a class="navbar-brand me-5 " href="#"><Link className='Login2' to="/Login">Login</Link></a>
                                        </div>
                                    </nav>

                                    <div class="col">
                                        <p className='navtext'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="donor mb-4 ">
                                <div class="row mb-4 ">

                                    <div class="col mb-4">
                                        <button type="button" class="btn btn-secondary"> <Link className='SignUp' to="/Signup"> Become a Donor</Link></button>
                                    </div>
                                    <div class="col mb-4 ">
                                        <button type="button" class="btn btn-secondary">Become a volunteer</button>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            <div>
                <h3 className="about mb-5 " style={{ "color": "#01BFBD", "textAlign": "left" }}>About us</h3>
                <div className='newnav mb-5'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Mattis molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dictum sit amet justo donec enim diam.
                </div>
            </div>

            {/* <div className='ccc'>

                <p><h1>7<h6>countries</h6>
                    32<h6>states</h6><span>240+<h6>Districts</h6>
                        100+<h6>programs</h6>  </span></h1>

                </p>
            </div> */}
            <div className='card cc mb-2' style={{backgroundColor:"#01BFBD",color:"w"}}>
                <div className='row'>
                    <div className='col'>
                        <h1>7</h1><small>countries</small>
                    </div>
                    <div className='col'>
                        <h1>32</h1><h6>states</h6>
                    </div>
                    <div className='col'>
                        <h1>240+</h1><h6>Districts</h6>
                    </div>
                    <div className='col'>
                        <h1> 100+</h1><h6>programs</h6>
                    </div>

                </div>
            </div>
            <div className='card'>
            <div className='voluntersteam mt-3'>


                <img className="voluntersteam1" src={volunter} />
                </div>
            </div>
            <div class="container mt-5" >
                <div class="row">
                    <div class="col">
                        <img src={foodcard} />
                    </div>
                    <div class="col">
                        <img src={clothes} />
                    </div>
                    <div class="col">
                        <img src={health} />
                    </div>
                </div>
                <div class="container mt-5" >
                    <div class="row">
                        <div class="col">
                            <img src={stationary} />
                        </div>
                        <div class="col">
                            <img src={gadgets} />
                        </div>
                        <div class="col">
                            <img src={footware} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='voluntaree mt-5 mb-5'>
                <div class="row">

                    <div class="col mt-5">

                        <div className='card mb-5' style={{ "width": "22rem", "marginLeft": "10rem" }}>
                            <br></br>
                            <h4 style={{ "color": "#01BFBD" }}>
                                Lorem ipsum dolor sit amet</h4>
                            <b className="text mb-5">
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum.Lorem ipsum adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                <br />  <br />  <br />
                            </b>
                        </div>
                    </div>
                </div>
                <div class="col">

                </div>


            </div>
            <div className='clothdt'>
                <div className='row'>
                    <div className='col'>
                        <img src={clothdonation}></img>
                    </div>
                    <div className='col'>
                        <p className='textcolor' style={{ fontFamily: "Segoe UI" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor</p>
                        <h4 style={{ marginLeft: "-445px", fontFamily: "Segoe UI, Semibold" }}>Lorem ipsum dolor sit amet.</h4>
                        <h4 style={{ marginLeft: "-620px" }}>18-03-2023</h4>
                        <h1 style={{ marginLeft: "-520px" }}>MADHAPUR</h1>
                        <h4 style={{ marginLeft: "-440px", fontFamily: "Segoe UI, Semibold" }}>Lorem ipsum dolor sit amet,<br></br>
                            <div style={{ marginLeft: "-25px" }}>consectetur adipiscing elit,</div>
                            sed do eiusmod tempor</h4>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div class="card" style={{
                        backgroundColor: "#707070",

                        width: "1530px",
                        height: "380px",
                        left: "0px"
                    }} >
                        <div class="card-body">
                            <h4 style={{
                                color: "white",
                                top: "3989px",
                                left: "68px",
                                width: "273px",
                                height: " 40px",
                                fontFamily: "Segoe UI, Bold"
                            }}>Our Proud Donors</h4>
                            <div className="d-flex">
                                <div style={{ marginLeft: "140px" }}>
                                    <img src={firstiamge} style={{
                                        top: " 4054px",
                                        left: "313px",
                                        width: "195px",
                                        height: "195px"
                                    }} />
                                </div>
                                <div style={{ marginLeft: "70px" }}>
                                    <img src={secondimg} style={{
                                        top: " 4054px",
                                        left: "313px",
                                        width: "195px",
                                        height: "195px"
                                    }} />
                                </div>
                                <div style={{ marginLeft: "70px" }}>
                                    <img src={thirdimg} style={{
                                        top: " 4054px",
                                        left: "313px",
                                        width: "195px",
                                        height: "195px"
                                    }} />
                                </div>
                                <div style={{ marginLeft: "70px" }}>
                                    <img src={fourthimg} style={{
                                        top: " 4054px",
                                        left: "313px",
                                        width: "195px",
                                        height: "195px"
                                    }} />
                                </div>
                                <div style={{ marginLeft: "70px" }}>
                                    <img src={fifthimg} style={{
                                        top: " 4054px",
                                        left: "313px",
                                        width: "195px",
                                        height: "195px"
                                    }} />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='groypwomen mt-4'>
                <div className='row'>
                    <div className='col'>
                        <img src={women} />

                    </div>
                    <div className='col'>
                        <p className='Proident'> Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className='Duis'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>

                <p className='Lopersum'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </div>
            <div className='row '>
                <div class="card" style={{
                    backgroundColor: "#707070",

                    width: "1530px",
                    height: "400px",
                    left: "0px"
                }} >
                    <div class="card-body">
                        <h4 style={{
                            "color": "var(--unnamed-color-ffffff)",
                            "text-align": "left",
                            " font": "normal normal bold 35px/47px Segoe UI",
                            " letter-spacing": " 1.23px",
                            "color": " #FFFFFF",
                            "opacity": "1",
                        }}>Founder</h4>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <img src={markgray} style={{
                                top: "3500px",
                                left: "30px",
                                width: "340px",

                                height: "300px",
                            }} />
                        </div>
                        <div className='col-8'>
                            <p className='markgr'>
                                Mark Grey Sloan
                            </p>
                            <p className='founder'>
                                Founder & trustee
                            </p>
                            <p className='cillum'>
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='row '>
                <div class="card" style={{
                    backgroundColor: "#01BFBD",

                    width: "1530px",
                    height: "500px",
                    left: "0px"
                }} >
                    <div className='form'>
                        <p className='Contact'>
                            CONTACT US
                        </p>
                        <div >
                            {/* <form >
                                <input type="text" placeholder='Name' value="Name" className='from22' /><br />
                                <input type="text" placeholder='Phone Number' value="form22" className='from22' /><br />
                                <input type="text" placeholder='Type Something' value="Type Something" className='from22' /><br />
                            </form> */}
                            <form className='formd'>

                                <input type="text" placeholder='Name' id="fname" name="fname" />

                                <input type="text" placeholder='Phone Number' id="lname" name="lname" />

                                <input type="text" placeholder='Type Something' id="lname" name="lname" />

                                <input type="text" id="lname" name="lname" />
                            </form>
                        </div>
                        <div className="mb-2">
                            {/* <button className='sss mt-4'
                            // className='d-grid gap-2 col-3 mx-auto'
                            >Submit</button> */}
                            <button type="button" class="btn btn-light"  size="lg">Submit</button>{' '}
                        </div>

                    </div>
                </div>
            </div>

            <MDBFooter className='main' color='#C5C5C5' bgColor="#707070"  >
                <MDBContainer className='p-1'>
                    <section className='container'>
                        <MDBRow>
                            <MDBCol lg='3' md='6' className='mb-4 mb-md-2'>
                                <div className='first'>
                                    <h6 class='brand_name'>About us</h6>
                                    <h6 class='brand_name'>Contact us</h6>
                                    <h6 class='brand_name'>Volunteers</h6>
                                    <h6 class='brand_name'>NGO</h6>
                                </div>
                            </MDBCol>
                            <MDBCol lg='3' md='4' className='mb-4 mb-md-2'>
                                <div className='second'>
                                    <h6 class='color'>Founders</h6>
                                    <h6 class='color'>Campaign</h6>
                                    <h6 class='color'>Become a volunteer</h6>
                                    <h6 class='color'>Donate</h6>
                                </div>
                            </MDBCol>
                            <MDBCol lg='3' md='6' className='mb-4 mb-md-2'>
                                <div className='third'>
                                    <h6 class='brand_name'>Contact us</h6>
                                    <h6 class='brand_name'>akjdjvnf@gmail.com</h6>
                                    <h6 class='brand_name'>akjdjvnf@gmail.com</h6>
                                    <h6 class='brand_name'>8877664499</h6>
                                </div>
                            </MDBCol>
                            <MDBCol lg='3' md='2' className='mb-4 mb-md-0'>
                                <div className='forth'>
                                    <h6 class='brand_name'>ADDRESS</h6>
                                    <h6> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, </h6>
                                    <h6>Bangalore-560016</h6>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </MDBContainer>
                <div className='text-center p-2' style={{ backgroundColor: '#707070', color: '#C5C5C5', marginTop: "100px" }}>
                    {/* <div className='fifth'> */}
                    All rights reserved to Helping Hands
                    {/* </div> */}
                </div>
            </MDBFooter>

        </div>


    )
}

export default Home
