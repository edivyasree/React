import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img from '../Images/Timer.png'


function BloodCamp() {
    const [api, setApi] = useState([])
    useEffect(() => {
        axios.get("http://192.168.4.227:8000/Bloodcamp_eventapi/")
            .then(resp => {
                console.log(resp.data)
                setApi(resp.data)
            })

    }, [])
    return (
        <div>

            <div className='row'>
                <div class="card" style={{
                    backgroundColor: "#01BFBDE6", width: "1350px",
                    height: "70px",

                    // boxShadow: "0px 3px 6px #F6F1F129",
                    // borderRadius: "0px 91px 0px 0px",
                    opacity: "1"

                }}>
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="Avatar" class="avatar" style={{

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
            >Blood Camp</p></div>
            <div class="container me-4 ">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Organiser_name</th>

                            <th>place</th>

                            <th>city</th>

                            <th>Date</th>

                            <th>camp_starts_at</th>

                            <th>camp_ends_at</th>


                            <th>contact_no</th>

                   
                        </tr>
                    </thead>
                    <tbody>

                        {
                            api.map((e, i) => (
                                <tr key={i}>
                                    <td>{e.id}</td>
                                   
                                    <td>{e.Organisername}</td>
                                    
                                    <td>{e.place}</td>

                                    <td>{e.city}</td>

                                    <td>{e.date}</td>

                                    <td>{e.camp_starts_at}</td>

                                    <td>{e.camp_ends_at}</td>

                                    <td>{e.contact}</td>

                                    
                                </tr>
                            
                            ))
                            
                            
                        }
                    </tbody>
                </table>
            </div>
            <div className='row'>
                <div className='col-lg-1 col-md-1 col-1'> </div>
                
                <div class="card" style={{
                    backgroundColor: "#01BFBDE6", width: "150px",

                    marginLeft: "-100px",
                    bottom: "29.5rem",
                    left: "-18px",
                    width: "106px",
                    height: "800px",

                    borderRadius: "0px 0px 95px 0px",
                    opacity: "1"
                }}>
                   

                </div>

            </div>


        </div>
    )
}

export default BloodCamp