import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const background = require('../Images/blueback.png');
const question = require ('../Images/questionmark.png');

class Congrats extends Component{
  onButtonPress(){
    this.props.navigator.push({
      id:'Login'
    });
  }
  render(){
    return(
      <Image source={background}>
      <View style ={styles.container}>

        <View style={styles.imageContainer}>
          <Image source={question} style={styles.q}>
          </Image>
        </View>

        <Text style={styles.header}>
          Registration Succesful!
        </Text>
        <Text style ={styles.message}>
        Congratulations! You are now registered with Community App! Please sign in to continue.
        </Text>
        <TouchableOpacity onPress ={this.onButtonPress.bind(this)} style = {styles.button}>
          <Text style = {styles.buttontext}>
          Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </Image>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    bg:{
    width: null,
    height:null,
  },
  header:{
    flex:1,
    fontWeight:'bold',
    fontSize: 30,
    color: 'white'
  },
  message:{
    flex:2,
    alignItems: 'center',
    fontWeight:'bold',
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 20,
    color:'mistyrose'
  },
  buttontext:{
    flex:1,
    textAlign:'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize:30,
    padding:30,
    height:10,
    width:400,
    color:'black'

  },
  button:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor:'burlywood'
  },

  imageContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    backgroundColor: 'transparent',
    paddingTop: 25,

  },
  q:{
    opacity: .6,
  },

});

module.exports = Congrats;
