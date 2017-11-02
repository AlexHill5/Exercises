import React, { Component } from 'react';
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, HorizontalGridLines, VerticalGridLines, XAxis, YAxis} from 'react-vis';
import './task2.css'
import axios from 'axios'
class Task2 extends Component {
    constructor(){
        super();
        this.state={

        }
        this.getM = this.getM.bind(this)
        this.getB = this.getB.bind(this)
        this.submit = this.submit.bind(this)

    }

    getM(e){
        console.log(e.target.value)
        this.setState({M: e.target.value})
    }

    getB(e){
        console.log(e.target.value)
        this.setState({B: e.target.value})
    }

    submit(){
        axios.get('http://localhost:4000/getData', {
    params: {
      M: this.state.M,
      B: this.state.B
    }
    }).then(res => {
        this.setState({ Data: res.data})
    })
    }

  render() {
    return (
    <div className="task2-wrapper">
    <div className='input-container'> 
        <h1> y=mx+b Graph! </h1> 
        <h3> This will graph the slope. Please give me what you want for M and B. </h3>
        <div> M: <input onChange={this.getM} />  B: <input onChange={this.getB} /> </div>
    </div>
        <button className='button' onClick={this.submit} > Submit Data </button>
<XYPlot height={600} width= {600}>
  <VerticalGridLines />
  <HorizontalGridLines />
  <XAxis />
  <YAxis />
  <LineSeries data={this.state.Data} />
</XYPlot>

      </div>
    );
  }
}



export default Task2;