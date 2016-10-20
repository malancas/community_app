import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Congrats extends Component{

  render(){
    return(
      <View style ={styles.container}>
        <Text style={styles.header}>
          Registration Succesful!
        </Text>

        <Text style ={styles.message}>
        Congratulations! You are now registered with Community App! Please sign in to continue.
        </Text>
        <TouchableHighlight style = {styles.button}>
          <Text style = {styles.buttontext}>
          Sign In
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFA07A'
  },
  header:{
    flex:1,
    fontWeight:'bold',
    fontSize: 40,
    paddingLeft: 60,
    paddingRight: 10,
    paddingTop: 50,
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
    color:'orange'


  },
  button:{
    flex:1/2,
    justifyContent:'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor:'mistyrose'
  }
});

module.exports = Congrats;
