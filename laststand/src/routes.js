import React from 'react';
import Home from './Home';
import About from './About';
import Topic from './Topic';
import NoMatch from './NoMatch';
import TopicDetail from './TopicDetail';
import NavBar from 'NavBar';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

export const Routes = () => {
return (
<div>
<Navbar/>
<Switch>
    <Route exact path="./Home" component={Home}/>
    <Route exact path="/">
        <Redirect to="/Home"/>
    </Route>
    <Route exact path="./About" component={About}/>
    <Route exact path="./About" component={Home}/>
    <Route exact path="./Topics/:topicId" component={TopicDetail}/>
    <Route component ={NoMatch} />
</Switch>

</div>
)
}