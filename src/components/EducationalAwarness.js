import axios from "axios";
import React, { useEffect, useState } from "react";
function EducationalAwarness() {
    const [api, setApi] = useState([])
    useEffect(() => {
        axios.get("http://192.168.4.227:8000/Educational_eventapi/")
            .then(resp => {
                setApi(resp.data)
                console.log(resp.data);
            })
    }, [])
    return (
        <div>
            <table className=" table table-bordered">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Organisername</th>
                    <th>Topic</th>
                    <th>camp_starts_at</th>
                    <th>camp_ends_at</th>
                    <th>Category</th>
                    <th>City</th>
                    <th>contact_no</th>
                    <th>Date</th>
                    <th>Eligibility</th>
                    <th>Place</th>
                    </tr>
                </thead>
                <tbody>{
                    api.map((e,i)=>(
                        <tr>
                         <td>{e.id}</td>
                         <td>{e.Organisername}</td>
                         <td>{e.Topic}</td>
                         <td>{e.camp_starts_at}</td>
                         <td>{e.camp_ends_at}</td>
                         <td>{e.category}</td>
                         <td>{e.city}</td>
                         <td>{e.contact}</td>
                         <td>{e.date}</td>
                         <td>{e.eligibility}</td>
                         <td>{e.place}</td>
                        </tr>
                    ))
}
                    </tbody>
            </table>
        </div>
    )
}
export default EducationalAwarness