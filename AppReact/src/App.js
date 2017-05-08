import React, { Component } from 'react';
import './css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Lista from './components/Lista'

import Avatar from 'material-ui/Avatar';
import imgAvatar from './images/mrrobot.jpg';
import logoMrro from './images/mr-robot-logo.png';
import IcDash from 'material-ui/svg-icons/action/dashboard';
import IcRm from 'material-ui/svg-icons/action/delete-forever';
import IcRootkit from 'material-ui/svg-icons/action/bug-report';
import IcRansom from 'material-ui/svg-icons/action/https';

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
            <div id="div_menu">
              <Drawer open={true}>
                <AppBar title={<img alt="fSociety"src={logoMrro} className="logo-robot"></img>} 
                showMenuIconButton={false} />
                <MenuItem primaryText="fSociety '-'board" leftIcon={<IcDash />} />
                <MenuItem primaryText="rootkits++" disabled={true} leftIcon={<IcRootkit />} />
                <MenuItem primaryText="ransomWares" disabled={true} leftIcon={<IcRansom />} />
                <MenuItem primaryText="rm -rf ECorp" disabled={true} leftIcon={<IcRm />} />
              </Drawer>
            </div>
            <div id="div_main" className="main">
              <AppBar title="Board" iconElementRight={ <Avatar src={imgAvatar} />}/>
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
