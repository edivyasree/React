import React, { useState } from 'react'

function FunctionDemo() {
    const [course,setCourse]=useState('ReactJS')
const[count,setCount]=useState(5)
  return (
    <div>
        <h1>Course Name: {course} </h1>
        <h1>Count : {count} </h1>
    <button className='btn btn-primary' onClick={()=>setCourse('React Native')||setCount(count+1)}>Update</button>
    {/* <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Increment</button> */}
    </div>

  )
}

export default FunctionDemo