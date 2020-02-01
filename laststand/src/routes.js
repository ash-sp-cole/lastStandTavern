import React from 'react';
import Home from './Views/Home';
import About from './Views/About';
import NoMatch from './Views/NoMatch';

import NavBar from './Components/Header';
import {Route, Switch, Redirect} from 'react-router-dom';
import TopicList from './Views/TopicList/TopicList';


export const Routes = () => {
return (
<div>
<NavBar/>
<Switch>
    <Route exact path="/Home" component={Home}/>
    <Route exact path="/">
        <Redirect to="/Home"/>
    </Route>
    <Route exact path="/About" component={About}/>
    <Route exact path="/About" component={Home}/>
    <Route exact path="/Topics" component={TopicList}/>
    <Route exact path="/Topics/:topicId" component={TopicList}/>
    <Route component ={NoMatch} />
</Switch>

</div>
)
}