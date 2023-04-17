import React, { Component } from 'react'

export class DataBinding extends Component {
    state={
        name:'Divya',
    }
    changeNameState = (e)=>{
        this.setState({
            name:e.target.value
        })
    }
  render() {
    return (
      <div>
          <h1>DataBinding</h1>
<input type="text" value={this.state.name} onChange={this.changeNameState}name="name"   ></input>
<h1>{this.state.name}</h1>
       </div>
    )
  }
}

export default DataBinding