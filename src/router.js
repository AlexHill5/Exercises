import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './components/Landing/Landing.js'
import Registration from './components/Registration/Registration.js'
import Task1 from './components/Task1/Task1.js'
import Task2 from './components/Task2/Task2.js'



export default (
    <Switch>
        <Route component={Landing} path='/' exact />
        <Route component={Registration} path='/task3' />
        <Route component={Task1} path='/task1' />
        <Route component={Task2} path='/task2' />

    </Switch>
)

