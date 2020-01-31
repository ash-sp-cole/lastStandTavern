import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';

ReactDOM.render(
<Router>

<Routes/>

</Router>, document.querySelector('#root')

);