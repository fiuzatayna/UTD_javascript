import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import EditGuideSeqs from './pages/EditGuideSeqs'
import AddGuideSeqs from './pages/AddGuideSeqs'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/edit/:id" component={EditGuideSeqs}/>
                <Route path="/add" component={AddGuideSeqs}/>
            </Switch>
        </BrowserRouter>
    );
}