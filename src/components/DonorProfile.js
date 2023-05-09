import React from 'react'
import oip from '../Images/OIP.png'
import fooddonation from '../Images/fooddonationjpg.png'
import healthdonation from '../Images/healthdonation.png'
import laptop from '../Images/Laptop.png'
import footdonation from '../Images/footdonation.png'
import '../styles/Donorprofile.css'
import { Link } from 'react-router-dom'
import img from '../Images/Timer.png'
function DonorProfile() {
    return (
        <div>

            <div className='row'>
                <div class="card" style={{
                    backgroundColor: "#01BFBDE6", width: "1350px",
                    height: "70px",

                    // boxShadow: "0px 3px 6px #F6F1F129",
                    borderRadius: "0px  0px 91px 0px",
                    opacity: "1"

                }}>
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="Avatar" class="avatar"
                        style={{

                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            opacity: "1"
                        }} />
                        
                </div>
                <div className='mt-2 px-2'>
                    
                    <span><img src={img} style={{ marginLeft: "-90rem", height: "120px", color: "rgb(255, 255, 255)" }} /></span>
                </div>
            </div>
            <div className='container'><p className='backsam'
                style={{ marginLeft: "5.8%" }}
            >Welcome back,Sam!</p></div>

            <div class="container me-4">
                <div class="row">
                    <div class="col-sm">
                        <div class="card" style={{ "width": "18rem", borderRadius: "0px 70px 0px 0px" }}>
                            <img src={fooddonation} class="card-img-top" alt="..." style={{ borderRadius: "0px 70px 0px 0px" }} />
                            <div class="card-body">

                                <Link className='donateee' to="/DonateFood"><h5>Food Donation</h5></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card" style={{ "width": "18rem", borderRadius: "0px 70px 0px 0px" }}>
                            <img src={oip} class="card-img-top" alt="..." style={{ borderRadius: "0px 70px 0px 0px" }} />
                            <div class="card-body">

                            <Link className='donateee' to="/DonateClothes">  <h5>Cloth Donation</h5></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card" style={{ "width": "18rem", borderRadius: "0px 70px 0px 0px" }}>
                            <img src={healthdonation} class="card-img-top" alt="..." style={{ borderRadius: "0px 70px 0px 0px" }} />
                            <div class="card-body">

                             <Link className="donateee" to="/DonateHealth">  <h5>Health Donation</h5></Link> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <div class="card" style={{ "width": "18rem", borderRadius: "0px 70px 0px 0px" }}>
                            <img src={laptop} class="card-img-top" alt="..." style={{ borderRadius: "0px 70px 0px 0px" }} />
                            <div class="card-body">

                               <Link className='donateee' to="/DonateStationary"> <h5>Stationary Donation</h5></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="card" style={{ "width": "18rem", borderRadius: "0px 70px 0px 0px" }}>
                            <img src={laptop} class="card-img-top" alt="..." style={{ borderRadius: "0px 70px 0px 0px" }} />
                            <div class="card-body">

                             <Link className='donateee' to="/DonateGadgets">  <h5>Gadgets Donation</h5></Link> 
                            </div>
                        </div>
                    </div>
                    <div class="col-sm mt-2">
                        <div class="card" style={{ "width": "18rem", borderRadius: "0px 70px 0px 0px" }}>
                            <img src={footdonation} class="card-img-top" alt="..." style={{ borderRadius: "0px 70px 0px 0px" }} />
                            <div class="card-body">

                            <Link className='donateee' to="/DonateFootware">  <h5>Footware Donation</h5></Link>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-1 col-md-1 col-1'> </div>
                <div class="card" style={{
                    backgroundColor: "#01BFBDE6", width: "150px",

                    marginLeft: "-100px",
                    bottom: "46rem",
                    left: "-18px",
                    width: "90px",
                    height: "600px",


                    borderRadius: "0px 0px 95px 0px",
                    opacity: "1"
                }}>



                </div>

            </div>


        </div>
    )
}

export default DonorProfile