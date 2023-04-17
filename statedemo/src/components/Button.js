import React, { Component } from 'react'

export class Button extends Component {
    constructor(props){
        super(props);
        this.state ={     
            title:"Click Me",
            appName:"React JS State demo application",
            users:{
                "id":1,
                "name":"Divya",
                "Domain":"Bhoomi"
            },
            users1:{

            "id":2,
                "name":"swetha",
                "Domain":"Python"
            },
            users2:{

                "id":3,
                    "name":"Raji",
                    "Domain":"React"
                }
        }
    }
  render() {
    return (
      <div className='container'>
          <h1>{this.props.appName}</h1> <br/>
        <h2>users Id:{this.state.users.id}</h2>
        <h2>users Name:{this.state.users.name}</h2>
        <h2>users Domain:{this.state.users.Domain}</h2>
          <button className='btn btn-primary'>{this.props.title}</button>
{/* 
      <h1>{this.state.appName}</h1> <br/>
        <h2>users Id:{this.state.users1.id}</h2>
        <h2>users Name:{this.state.users1.name}</h2>
        <h2>users Domain:{this.state.users1.Domain}</h2>
          <button className='btn btn-primary'>{this.props.title}</button>

          <h1>{this.state.appName}</h1> <br/>
        <h2>users Id:{this.state.users2.id}</h2>
        <h2>users Name:{this.state.users2.name}</h2>
        <h2>users Domain:{this.state.users2.Domain}</h2>
          <button className='btn btn-primary'>{this.props.title}</button>  */}
      </div>
    )
  }
}

export default Button