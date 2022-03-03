import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom' 
import Dashboard from './pages/Dashboard'
import Employee from './pages/Employee'
import Attendance from './pages/Attendance'
import Login from './Login/Loginpage';

const Routes = () => {
    return (
       <Switch>
            <Route   path='/dashboard' component={Dashboard}/>
            <Route exact path='/'  component={Login}/>
            <Route path='/employee'  component={Employee}/>
            <Route path='/attendace'  component={Attendance}/>
        </Switch>
    )
}

export default Routes
