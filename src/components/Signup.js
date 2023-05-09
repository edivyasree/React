import axios from 'axios'
import React, { useState } from 'react'
import { FaArrowRight, FaRegCheckCircle } from "react-icons/fa"
import '../styles/Signup.css'
// import '../styles/Signup.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Signup() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [arr, setarr] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [userName, setuserName] = useState("")
    const [email, setemail] = useState("")
    const [gender, setgender] = useState("")
    const [options, setoptions] = useState("")


    const singupData = (e) => {
        setShow(true)
        // e.preventdefault();
        let obj = {
            first_name: firstName,
            last_name: lastName,
            username: userName,
            email: email,
            gender: gender,
            options: options
        }
        console.log(obj, "one object created")
        // setFirst_name("")
        // setLast_name("")
        // setUsername("")
        // setEmail("")
        // setCity("")
        // setState("")
        // setPasscode("")

        axios.post("http://192.168.3.97:8000/signup/", obj).then((response) => {
            console.log(response.data);
            // setarr(response.data)
        })


    }
    return (
        <div>
            <div className='img'>
                <div className='row'>
                    <div className='frm col-4'>
                        <h4>Welcome Donor</h4>
                        <h6 className='text-start mb-4'>Create an Account</h6>
                        <div className="input-group">
                            <input type="text" className='form-control'
                                name="firstName"
                                value={firstName}
                                onChange={(e)=>setFirstName(e.target.value)}
                                placeholder='First name'></input>
                            <label className='label'>First name</label>
                        </div><br />
                        <div className='input-group'>
                            <input type="text" className='form-control'
                                name='lastName'
                                value={lastName}
                                onChange={(e)=>setlastName(e.target.value)}
                                placeholder='Last name'></input>
                            <label className='label'>Last name</label>
                        </div><br />
                        <div className='input-group'>

                            <input type="text" className='form-control'
                                name='userName'
                                value={userName}
                                onChange={(e)=>setuserName(e.target.value)}
                                placeholder='User name'></input>
                            <label className='label'>User Name</label>
                        </div><br />
                        <div className='input-group'>
                            <input type="text" className='form-control'
                                name='email'
                                value={email}
                                onChange={(e)=>setemail(e.target.value)}
                                placeholder='Email'></input>
                            <label className='label'>Email</label>
                        </div><br />
                        <div className='input-group'>
                            Gender:
                            <div className='col'>
                                <label> Male</label>
                                <input type="radio"
                                    name='gender'
                                    value="Female"
                                    onChange={(e)=>setgender(e.target.value)}
                                    placeholder='Male'
                                />
                            </div>
                            <div className='col'>
                                <label>Female</label>
                                <input type="radio"
                                    name='gender'
                                    value="Male"
                                    //  checked={gender === "Female"}
                                    onChange={(e)=>setgender(e.target.value)}
                                    placeholder='Female'
                                />
                            </div>
                        </div>

                        <div className='input-group'>
                            <label>Options:</label>
                            <div className='col'>
                                <label> Donors</label>
                                <input type="radio"
                                    name='options'
                                    value="is_Donar"
                                    //  checked={gender === "Female"}
                                    onChange={(e)=>setoptions(e.target.value)}
                                    placeholder='is_Donar'

                                />
                            </div>
                            <div className='col'>
                                <label> Volunteers</label>
                                <input type="radio"
                                    name='options'
                                    value="is_Volunteer"
                                    //  checked={gender === "Female"}
                                    onChange={(e)=>setoptions(e.target.value)}
                                    placeholder='is_Donar'
                                />

                                <label className='label'>Gender
                                </label>
                            </div>
                        </div><br />
                        {/* <div className='input-group'>
                            <input type="text" className='form-control'
                                name='state'
                                value={formData.state}
                                onChange={inputHandler} placeholder='State'></input>
                            <label className='label'>State</label>
                        </div><br />
                        <div className='input-group'>
                            <input type="text" className='form-control'
                                name='passcode'
                                value={formData.passcode}
                                onChange={inputHandler} placeholder='Passcode'></input>
                            <label className='label'>Passcode</label>
                        </div><br /> */}
                        <div className='input-group mb-3'>

                            <button type='button' className='form-control btnn'
                                onClick={singupData}
                            ><Link to="/ChangePassword"><FaArrowRight /></Link></button>
                            <Modal className='modal-box text-center' show={show} onHide={handleClose}>
                                <Modal.Body><FaRegCheckCircle className='fa-design' />
                                    <h4>OTP Sent to Your Mail-Id</h4>
                                    <p> Please check your email
                                        address to ChangePassword.</p>

                                    <button type='button' className='cls-btn' onClick={handleClose}
                                    > Close</button>
                                </Modal.Body>
                                {/* <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer> */}
                            </Modal>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}

export default Signup
