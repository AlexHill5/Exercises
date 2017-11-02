import React, { Component } from 'react';
import './registration.css'
import axios from 'axios'
class Registration extends Component {
    constructor(){
        super()
        this.state= {
            Username: '',
            Email: '',
            Password: ''
        }
        this.Username = this.Username.bind(this)
        this.Email = this.Email.bind(this)
        this.Password = this.Password.bind(this)
        this.Submit = this.Submit.bind(this)
    }

    Username(e){
        this.setState({Username: e.target.value})
    }
    Email(e){
        this.setState({Email: e.target.value})
    }
    Password(e){
        console.log(e.target.value)
        this.setState({Password: e.target.value})
    }

    Submit(){
        var regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

        if( this.state.Username === '' || this.stateEmail === ''){
            alert('All fields are required')
        }
        if (regExp.test(this.state.Password) === false || this.state.Password.length < 8){
            alert('Password must be 8 characters, contain 1 Capital, 1 number, and 1 special character. ')
        }else {
            alert('Thank you! Please check your email')
            axios.put('http://localhost:4000/registration', {username: this.state.Username, email: this.state.Email, password: this.state.Password})
            this.setState({Username: '', Email: '', Password: ''})
        }
        
        
    }

    render() {
        console.log([this.state.Username, this.state.Email, this.state.Password])
        return (
            <div className='registration-wrapper'>
                <span className='inputs'>Username*: </span><input value={this.state.Username} type="text" required onChange={this.Username }   /> 
                 <span className='inputs'>Email*: </span><input type="text" value={this.state.Email} required  onChange={this.Email}  /> 
                 <span className='inputs'>Password*: </span><input type="text"  value={this.state.Password} required  onChange={this.Password}   />
                 <button className='submit-button' onClick={this.Submit}> Create Account! </button>
            </div>
        );
    }
}

export default Registration;