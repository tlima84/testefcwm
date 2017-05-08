import React, { Component } from 'react';
import {browserHistory} from  'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey900} from 'material-ui/styles/colors';
import {grey100} from 'material-ui/styles/colors';
import {grey200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Login extends Component {


	constructor(props){
        super(props);        
        this.state = {msg:this.props.location.query.msg};
    }

    autenticar(event){
    	event.preventDefault();

    	const requestInfo = {
            method:'POST',
            body:JSON.stringify({login:this.refs.login.getValue(),senha:this.refs.senha.getValue()}),
            headers:new Headers({
                'Content-type' : 'application/json' 
            })
        };
   
        fetch('http://localhost:3021/autenticar',requestInfo)
            .then(response => {
                if(response.ok) {
                    return response.text();
                } else {
                    throw new Error('não foi possível fazer o login');
                }
            })
            .then(token => {
                localStorage.setItem('x-access-token',token);
                browserHistory.push('/board');
            })
            .catch(error => {
                this.setState({msg:error.message});
            });
    }

    render(){
    	   const muiTheme = getMuiTheme({
			        palette: {
			          primary1Color: grey900,
			          canvasColor: grey100,
			          windowBackground: grey200
			        }
			      });
        return (       
            <div>
            	<MuiThemeProvider  muiTheme={muiTheme}>            	
	            	<div className="login">
		            	<form onSubmit={this.autenticar.bind(this)}>
			            	<span>Autenticação</span><br/>
			            	<span className="alert-span">{this.state.msg}</span><br/>
			            	<TextField hintText="Login" floatingLabelText="Login" ref='login'/>
			            	<br/>
			            	<TextField hintText="Senha" floatingLabelText="Senha" type="password" ref='senha'/>
			            	<br/>
			            	<RaisedButton label="Entrar" primary={true} type="submit" value="login"/>
		               	</form>             
	                </div>
                </MuiThemeProvider>
            </div>
        );
    }

}