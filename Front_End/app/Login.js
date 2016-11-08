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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  onButtonPress(){
    this.props.navigator.push({
      id:'Main'
    });
  }


  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.text}
          placeholder= "Blah"
          onChangeText={(text) => this.setState({text})}
        />
      <TextInput
          style={styles.text}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text)=> this.setState({text})}
          />
          <TouchableOpacity onPress ={this.onButtonPress.bind(this)} style = {styles.onScreenButton}>
            <Text style={styles.loginButton}>
            Login
            </Text>
          </TouchableOpacity>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 6,
    backgroundColor: '#FFA07A',
  },

  text: {
    textAlign: 'left',
    color: '#FAF0E6',
    marginBottom: 5,
    flex: 1,
  },

  loginButton: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'bold',
    backgroundColor: 'burlywood',
    alignItems: 'center',
    flex: 1,
    },

   onScreenButton: {
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf:'stretch',
     backgroundColor:'burlywood'

    }
});

module.exports = Login;
