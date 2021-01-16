import React, {Component} from 'react'


class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0,
    }
  }

  render(){
    return(
      <div className="wrapper">
      <h1>Counter App</h1>
      <span>{this.state.count}</span>
      <button
      className='incrementBtn'
      onClick={
        ()=>{
          this.setState((state, props)=>{
            return{
              count: state.count + props.increment,
            }
          })
        }
      }>Increase</button>
      </div>
    )
  }
}

export default Counter
