import React, { useState } from "react";
import '../styles/ChangePassword.css'
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
function ChangePassword() {
    const [username, setUsername] = useState("")
    const [passcode, setpasscode] = useState("")
    const [password, SetPassword] = useState("")
    // const [formData, setFormData] = useState(initialData)

    const LogIn = (e) => {
        let obj = {
            username: username,
            passcode: passcode,
            password: password,

        }
        console.log(obj, "asdf");
        axios.put("http://192.168.3.97:8000/setpassword/", obj)
            .then((response) => {
                console.log(response);
            })

    }
    return (
        <div>
            <div className='img1'>
                <div className='row'>
                    <div className='frm1  mb-6 col-4'>
                        <h3 className="cp mt-2 mb-5">Change Password</h3>
                        {/* <h6 className='text-start mb-4'></h6> */}
                        <br />
                        <div className="input-group mt-4">
                            <input type="text" className='form-control'
                                name="username"
                                value={username} onChange={(e) => setUsername(e.target.value)}

                                placeholder='username'></input>
                            <label className='label'>userName</label>
                        </div><br />
                        <div className="input-group">
                            <input type="text" className='form-control'
                                name="passcode"
                                value={passcode} onChange={(e) => setpasscode(e.target.value)}
                                placeholder='passcode'></input>
                            <label className='label'>Password</label>
                        </div><br />

                        <div className="input-group">
                            <input type="password" className='form-control'
                                name="password"
                                value={password} onChange={(e) => SetPassword(e.target.value)}
                                placeholder='password'></input>
                            <label className='label'>password</label>
                        </div><br />
                        <div className='row '>
                            <div className='col-6'>
                                <div className='text-start'>
                                    <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                    <label className='form-check-label mb-5 ms-1'>Remember me?</label>

                                </div>
                            </div>
                        </div>
                        <div className='input-group mb-5'>

                            <button type='button' className='form-control btnn mb-5 '
                                onClick={LogIn}
                            ><Link  to="/Login">LogIn</Link>  <FaArrowRight /></button>

                        </div>

                    </div>
                </div>
            </div>


        </div>

    )
}
export default ChangePassword