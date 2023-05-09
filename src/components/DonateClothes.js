import React, { useState } from "react";
import ClothDonation from '../Images/clothdonation1.jpg'
import '../styles/DonateClothes.css'
import { Button, Col, Form, Row } from 'react-bootstrap'
import axios from "axios";
function DonateClothes() {
    const [name, setName] = useState("")
    const [quantity, setquantity] = useState("")
    const [pick_up, setPickup] = useState("")
    const [contact, setcontact] = useState("")
    const [pincode, setpincode] = useState("")
    const [exp, setexp] = useState("")
    const handleclick = (e) => {

        let obj = {
            name: name,
            //    food_type:Foodtype,
            quantity: quantity,
            pick_up: pick_up,
            contact: contact,
            pincode: pincode,
            exp: exp
        }
        console.log(obj, "sree");
        axios.post("http://192.168.3.97:5000/api/Clothes/", obj, {
            auth: {
                username: "ramesh",
                password: 12345
            }
        })
            .then((resp => {
                console.log(resp.data, "dsfgh");
            }))

    }

    return (
        <div>
            <div className="row">

                <div class="card" style={{
                    backgroundColor: "#01BFBDE6", width: "1300px",
                    height: "80px",
                    boxShadow: "0px 3px 6px #F6F1F129",
                    borderRadius: "0px  0px 91px 0px",
                    opacity: "1"
                }}>
                    <div class="card-body" style={{ marginLeft: "-1150px", }}>
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="Avatar" class="avatar" style={{

                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            opacity: "1"
                        }} />
                    </div>
                </div>

            </div>
            <div className="row">
                <div className='col-lg-6 col-md-6 col-6'>
                    <img src={ClothDonation} style={{ height: "709px" }} />
                </div>
                <div className='col-lg-6 col-md-6 col-6'>
                    <Form>
                        <h3 className='textHeading mt-4'>Donate Clothes</h3>
                        <Form.Group className="mt-4" >
                            <Row>
                                <Col sm="3">
                                    <Form.Label><span ><p className='py-2 pcolor' >Name:</p></span></Form.Label></Col>
                                <Col sm="7">
                                    <Form.Control type="text" id='boxes' value={name} onChange={(e) => setName(e.target.value)} />
                                </Col>
                            </Row>
                        </Form.Group>
                        {/* <Form.Group className="mt-1" >
                            <Row>
                                <Col sm="3">
                                    <Form.Label><span ><p className='py-2 pcolor' >Food Type:</p></span></Form.Label></Col>
                                <Col sm="7">
                                    <select class="form-select" aria-label="Default select example"  
                                    value={Foodtype}
                                    onChange={(e)=>setFoodtype(e.target.value)}
                                    >
                                        <option >Select Foodtype</option>
                                        {food_type.map((e) => (
                                            <option value={e.type}>{e.type}</option>
                                        ))}
                                    </select>
                                </Col>
                            </Row>
                        </Form.Group> */}
                        <Form.Group className="mt-1" >
                            <Row>
                                <Col sm="3">
                                    <Form.Label><span ><p className='py-2 pcolor' >Quantity:</p></span></Form.Label></Col>
                                <Col sm="7">
                                    <Form.Control type="text" id='boxes' value={quantity} onChange={(e) => setquantity(e.target.value)} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mt-1" >
                            <Row>
                                <Col sm="3">
                                    <Form.Label><span ><p className='py-2 pcolor' >ExpiryDate:</p></span></Form.Label></Col>
                                <Col sm="7">
                                    <Form.Control type="Date" id='boxes' value={exp} onChange={(e) => setexp(e.target.value)} />
                                </Col>
                            </Row>
                        </Form.Group>
                        {/* <Form.Group className="mt-1" >
                            <Row>
                                <Col sm="3">
                                    <Form.Label><span ><p className='py-2 pcolor' >No. Of items:</p></span></Form.Label></Col>
                                <Col sm="7">
                                    <select class="form-select" aria-label="Default select example">
                                        <option ></option>
                                    </select>
                                </Col>
                            </Row>
                        </Form.Group> */}
                        <Form.Group className="mt-1" >
                            <Row>
                                <Col sm="3">
                                    <Form.Label><span ><p className='py-2 pcolor' >contact no:</p></span></Form.Label></Col>
                                <Col sm="7">
                                    <Form.Control type="text" id='boxes' value={contact} onChange={(e) => setcontact(e.target.value)} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mt-1" >
                            <Row>
                                <Col sm="3">
                                    <Form.Label><span ><p className='py-2 pcolor' >Pick Up:</p></span></Form.Label></Col>
                                <Col sm="7">
                                    <Form.Control type="text" id='boxes' value={pick_up} onChange={(e) => setPickup(e.target.value)} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mt-1" >
                            <Row>
                                <Col sm="3">
                                    <Form.Label><span ><p className='py-2 pcolor' >Pincode:</p></span></Form.Label></Col>
                                <Col sm="7">
                                    <Form.Control type="text" id='boxes' value={pincode} onChange={(e) => setpincode(e.target.value)} />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mt-1" >
                            <Row>
                                <Col sm="3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                </Col>
                                <Col >
                                    <p style={{ marginLeft: "-160px" }}>I accept that i take responsibilty for the donated items wholly</p>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mt-2" >
                            <Row>
                                <Col sm="12">
                                    <Button style={{
                                        top: "685px",
                                        left: "677px",
                                        width: "587px",
                                        height: "41px",
                                        backgroundColor: "#01BFBDE6"

                                    }} onClick={handleclick}>Submit</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default DonateClothes