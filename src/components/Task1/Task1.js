import React, { Component } from 'react';
import './task1.css'
import axios from 'axios'
class Task1 extends Component {
    constructor(){
        super();
        this.state={

        }
        this.getInput = this.getInput.bind(this)
        this.getOutput = this.getOutput.bind(this)
    }

    getInput(e){
        this.setState({Input: e.target.value})
    }

    getOutput(){
        axios.get(`http://localhost:4000/output/${this.state.Input}`).then( res => {
            this.setState({Output: res.data[0]})
        })
    }
    render() {
        return (
            <div className='task1-wrapper'>
                <div className='tasks'>
                <h1> INPUT </h1>
                <input onChange={this.getInput} />
                </div>
                <div className='tasks'>
                <button onClick={this.getOutput}> Get Output </button>
                </div>
                <div className='tasks'>
                <h1> OUTPUT </h1>
                <h1> {(!this.state.Output) ? 'submit input' : this.state.Output } </h1>
                
                </div>
                
            </div>
        );
    }
}

export default Task1;