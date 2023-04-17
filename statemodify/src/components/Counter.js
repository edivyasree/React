import React, { Component } from 'react'

class Counter extends Component {
   state={
        counter:0,
    }
    increment=()=>{
        alert("calling increment"+" "+this.state.counter)
        this.setState({counter:this.state.counter+1});
    }
    decrement=()=>{
        alert("calling Decrement"+" "+this.state.counter)
        if(this.state.counter<=0){
            this.setState({
                counter:0
            });
        }else{
        this.setState({counter:this.state.counter-1});
    }
}
  render() 
{
    return (
      <div>
          <h1>Counter:{this.state.counter}</h1>
          <button className='btn btn-success' onClick={this.increment}>Increment</button>
          <button className='btn btn-danger' onClick={this.decrement}>Decrement</button>
    </div>
    )
  }
}

export default Counter