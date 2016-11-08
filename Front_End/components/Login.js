//Login Page
import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';

const question = require ('../Images/questionmark.png');
const background = require('../Images/blueback.png');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  onButtonPress1(){
    this.props.navigator.push({
      id:'Main'
    });
  }

    onButtonPress2(){
      this.props.navigator.push({
        id:'Register'
      });
    }



  render() {
    return (
      <Image source={background}>
      <View style={styles.container}>

        <View style={styles.imageContainer}>
          <Image source={question} style={styles.q}>
          </Image>
      </View>

      <View style={styles.textContainer}>
        <TextInput
          style={styles.text}
          placeholder= "Username"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.text}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text)=> this.setState({text})}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress ={this.onButtonPress1.bind(this)} style = {styles.buttonContainer}>
            <Text style={styles.buttonText}>
            Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.registerContainer}>
          <TouchableOpacity onPress={this.onButtonPress2.bind(this)} style={styles.registerContainer}>
          <Text style={{fontSize: 15}}>
          New User? Click here to register!
          </Text>
          </TouchableOpacity>
          </View>

      </View>
      </Image>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-between'
  },

  imageContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:2,
    backgroundColor: 'transparent'
  },

  textContainer:{
    justifyContent:'center',
    flex:3,
    backgroundColor:'transparent',
  },

  buttonContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'burlywood',
  },
  registerContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },


  q:{
    opacity: .6,
  },


  text: {
    flex: 1,
    textAlign: 'left',
    color: 'gold',
    marginLeft: 10,
  },



   buttonText: {
     fontSize: 20,
     fontWeight:'bold',
     flex: 1,
     marginTop:30
     },
});


module.exports = Login;
