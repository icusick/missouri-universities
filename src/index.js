import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './components/About';
import University from './components/University';



ReactDOM.render(
	<BrowserRouter>
    	<div>
			<Switch>
				<Route path="/university/:id" component={University} />
				<Route exact path='/' component={App}/>
      			<Route path='/about' component={About}/>
      			
			</Switch>
		</div>
	</BrowserRouter>, document.getElementById('root'));
