//import components needed
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

var Register = require('./components/Register');
var Congrats = require('./components/Congrats');
var Login = require('./components/Login');
var Main = require ('./components/Main');

class Community extends Component {
  render() {
    return (
      <Navigator
        initialRoute= {{
          id:'Login'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );
  }

  //Class uses switch statement to navigate between different scenes using their IDs
  navigatorRenderScene(route, navigator){
    _navigator = navigator;
    switch(route.id){
      case'Register':
        return(<Register navigator={navigator} title = "Register" />);

      case'Congrats':
        return(<Congrats navigator ={navigator} title ="Congrats" />);

      case'Login':
        return(<Login navigator ={navigator} title ="Login" />);

      case 'Main':
        return(<Main navigator = {navigator} title ="Main" />);

      case 'Profile':
        return(<Profile navigator ={navigator} title ="Profile" />);

    }

  }
}

AppRegistry.registerComponent('Community', () => Community);
