import React from 'react'
import '../styles/Register.css'
import { FaUser,FaRegEnvelope,FaEnvelope,FaKey } from "react-icons/fa"

function Register() {

    return (
        <div>
            <div className='displaycard mt-5'>
                <div className='card' >
                    <div className='card-body'>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping">
                            <FaUser/>
                            </span>
                            <input type="text" class="form-control" placeholder="Username"
                                aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br/>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping">
                                {/* <FaRegEnvelope/> */}
                                <FaEnvelope/>
                                </span>
                            <input type="text" class="form-control" placeholder="Username"
                                aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br/>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping"><FaKey/></span>
                            <input type="text" class="form-control" placeholder="Username"
                                aria-label="Username" aria-describedby="addon-wrapping" />
                        </div><br/>
                        <button type="button" class="btn btn-primary">Primary</button>
                    </div>
                </div>
            </div>



            {/* <div className='displaycard mt-5'>
                    <div className='card' >
                        <div className='card-body'>
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">
                                    <FaUser />
                                </span>
                                <input type="text" class="form-control" placeholder="Firstname"
                                    aria-label="Username" aria-describedby="addon-wrapping"
                                    onChange={handlechange} vlaue={formvalues.first_name} />
                            </div><br />
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">
                                    <FaUser />
                                </span>
                                <input type="text" class="form-control" placeholder="Lastname"
                                    aria-label="Username" aria-describedby="addon-wrapping"
                                    onChange={handlechange} value={formvalues.last_name} />
                            </div><br />
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">
                                    <FaUser />
                                </span>
                                <input type="text" class="form-control" placeholder="Username"
                                    aria-label="Username" aria-describedby="addon-wrapping"
                                    onChange={handlechange} value={formvalues.username} />
                            </div><br />
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">

                                    <FaEnvelope />
                                </span>
                                <input type="text" class="form-control" placeholder="Email"
                                    aria-label="Username" aria-describedby="addon-wrapping"
                                    onChange={handlechange} value={formvalues.email} />
                            </div><br />
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">
                                    <FaUser />
                                </span>
                                <input type="text" class="form-control" placeholder="city"
                                    aria-label="Username" aria-describedby="addon-wrapping"
                                    onChange={handlechange} value={formvalues.city} />
                            </div><br />
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">
                                    <FaUser />
                                </span>
                                <input type="text" class="form-control" placeholder="state"
                                    aria-label="Username" aria-describedby="addon-wrapping"
                                    onChange={handlechange} value={formvalues.state} />
                            </div><br />
                            <button type="button" class="btn btn-primary ms-5 me-5">Cancel</button>
                            <button type="button" class="btn btn-primary ms-5 me-5" onClick={singupData}>Signup</button>
                        </div>
                    </div>
                </div> */}




        </div>
    )
}

export default Register
