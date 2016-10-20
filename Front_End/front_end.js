//import components needed
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

var Register = require('./app/Register');
var Congrats = require('./app/Congrats');

class Comm extends Component {
  render() {
    return (
      <Navigator
        initialRoute= {{
          id:'Register'
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

    }

  }
}

AppRegistry.registerComponent('Comm', () => Comm);
