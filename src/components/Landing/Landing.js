import React, { Component } from 'react';
import './landing.css'
import {Link} from 'react-router-dom'
class Landing extends Component {
    render() {
        return (
            <div className='main-container'>
            <Link to='/task1' > <div className='links'> Task #1 </div> </Link>
            <Link to='/task2' > <div className='links'> Task #2 </div> </Link>
            <Link to='/task3' > <div className='links'> Task #3 </div> </Link>
            </div>
        );
    }
}

export default Landing;