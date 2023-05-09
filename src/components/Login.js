import React, { useState } from 'react'
import axios from 'axios'
import { FaArrowRight, FaRegCheckCircle } from "react-icons/fa"
import '../styles/Signup.css'
import { Link } from 'react-router-dom';

function Login() {
    const loginInitialData = {
        username: "",
        password: ""
    }
    const [formData, setFromData] = useState(loginInitialData)
    const loginInputHandler = (e) => {
        const { name, value } = e.target;
        setFromData({ ...formData, [name]: value })
    }

    const loginData = () => {
        let object = {
            username: formData.username,
            password: formData.password
        }
        console.log(object, "object created");
        axios.post("http://192.168.3.97:8000/signin/", object).then((response) => {
            console.log(response);
        })
    }
    return (
        <div>

            <div className='img'>
                <div className='row'>
                    <div className='frm col-4'>
                        <h5 className='text-start mt-5'>Welcome back, Jane</h5>
                        <small className='small-text text-start me-5 pe-5'>Welcome back, please enter your details</small>
                        <div className="input-group mt-3">
                            <input type="text" className='form-control'
                                name="firstName"
                                // value={formData.firstName}
                                // onChange={inputHandler}
                                placeholder=''></input>
                            <label className='label-g'>Log in with Google</label>
                        </div><br />

                        {/* <hr className='hr-tg'/><span>or</span><hr className=''/> */}
                        <div className="input-group">
                            <input type="text" className='form-control'
                                name="username"
                                value={formData.username}
                                onChange={loginInputHandler}
                                placeholder='user name'></input>
                            <label className='label'>User name</label>
                        </div><br />
                        <div className='input-group'>
                            <input type="password" className='form-control'
                                name='password'
                                value={formData.password}
                                onChange={loginInputHandler}
                                placeholder='Password'></input>
                            <label className='label'>Password</label>
                        </div>
                        <div className='row '>
                            <div className='col-6'>
                                <div className='text-start'>
                                    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                    <label className='form-check-label ms-1'>Remember me?</label>

                                </div>
                            </div>
                            <div className='col-6'>
                                <span className='form-check-label ms-5 ps-4'>Forgot password</span>
                            </div>
                        </div><br />


                        <div className='input-group mb-3'>
                            <button type='button' className='form-control btnn'
                                onClick={loginData}
                            >
                                <Link to="/DonorProfile"><FaArrowRight /></Link></button><br />
                            {/* <Modal className='modal-box text-center' show={show} onHide={handleClose}>
                                <Modal.Body><FaRegCheckCircle className='fa-design' />
                                    <h4>Registration successful!</h4>
                                    <p>Thank you. Please click on the link sent to your email
                                        address to activate your account.</p>
                                    <button type='button' className='cls-btn' onClick={handleClose}
                                    > Close</button>
                                </Modal.Body> */}
                            {/* <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer> */}
                            {/* </Modal> */}
                        </div>
                        <div className='text-start'>
                            <small className='small-text'>Don't have an account?</small>
                            <Link to='/signup'><button type='button' className='sign-btn'>Sign up.</button></Link>

                        </div>


                    </div>
                </div>


            </div>

        </div>
    )
}

export default Login
