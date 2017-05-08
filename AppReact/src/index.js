import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router,Route,browserHistory} from 'react-router';
import Login from './components/Login';


function verificaAutenticacao(nextState,replace) {
  
  if(localStorage.getItem('x-access-token') === null){
    replace('/?msg=É preciso estar autenticado para acessar');
  }
}


ReactDOM.render(
	(
      <Router history={browserHistory}>
	      <Route path="/" component={Login}/>
	      <Route path="/board" component={App} onEnter={verificaAutenticacao}/>
	      </Router>),
  document.getElementById('root')
);
