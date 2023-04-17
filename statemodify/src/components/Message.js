import React, { Component } from 'react'

export class Message extends Component {
    state={
        message:"welcome to Ojas"
    }
    update=()=>{
        this.setState({message:"Thank you for SubScribe"})
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button className='btn btn-primary' onClick={this.update}>SubScribe</button>
          </div>
    )
  }
}

export default Message