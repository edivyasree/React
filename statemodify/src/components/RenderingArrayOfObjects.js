import React from 'react'
import { Table } from 'react-bootstrap'
function RenderingArrayOfObjects() {
    const data=[
        {
            "name":"Divya",
            "marks":987,
        },
        {
            "name":"swetha",
            "marks":988
        },
        {
            "name":"rajeswari",
            "marks":890
        }
    ]
    const tableRows=data.map(
        (element)=>{
            return(
                <tr>
                    <td>{element.name}</td>
                    <td>{element.marks}</td>
                </tr>
            )
        }
    )
  return (
    <div className='container'>
        <h1>RenderingArrayOfObjects</h1>
        <Table hover>
            <thead>
                <tr>
                <th>name</th>
                <th>marks</th>
                </tr>
                
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </Table>
        </div>
  )
}

export default RenderingArrayOfObjects