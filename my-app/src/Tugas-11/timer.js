import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 100,
      showTime : true,
      date: new Date().toLocaleTimeString()
      
    }
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate() {
      if (this.state.time === 0) {
          this.state.showTime = false
      }
  }

  
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1 
    });
  }

  
  
  render(){
    return(
      <>
      {this.state.showTime && 
        <div className="flex" >
            <h1 style={{textAlign: "center", marginRight:"75px"}}>
            <b>sekarang jam : {this.state.date} </b>
            </h1>
            <h1>Hitungan mundur : {this.state.time}</h1>            
        </div>

      }

      </>
    )
  }
}

export default Timer