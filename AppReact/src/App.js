import React, { Component } from 'react';
import './css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Lista from './components/Lista'

import Avatar from 'material-ui/Avatar';
import imgAvatar from './images/mrrobot.jpg';
import logoMrro from './images/mr-robot-logo.png';


import {grey900} from 'material-ui/styles/colors';
import {grey100} from 'material-ui/styles/colors';
import {grey200} from 'material-ui/styles/colors';

class App extends Component {
  
  render() {

    const muiTheme = getMuiTheme({
        palette: {
          primary1Color: grey900,
          canvasColor: grey100,
          windowBackground: grey200
        }
      });
    
    return (
      <div className="App" >
       
        <MuiThemeProvider  muiTheme={muiTheme}> 
          <div>
            
            <div id="div_main">
              <AppBar title={<div className="img-tam"><img alt="fSociety"src={logoMrro} className="logo-robot"></img></div>}  iconElementRight={ <Avatar src={imgAvatar} />}/>
              <Lista/>
            </div> 
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
injectTapEventPlugin();
export default App;
