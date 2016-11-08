import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const background = require ('../Images/pinkback.png');
const avatar = require('../Images/avatar_fox.png');

class Profile extends Component {
  render{
    return(
      <Image source={background}>
      </Image>
    );
  }
}



module.exports = Profile;
