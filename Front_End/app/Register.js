
import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  onButtonPress(){
    this.props.navigator.push({
      id:'Congrats'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          placeholder= "Username"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.text}
          placeholder="Email"
          onChangeText={(text)=> this.setState({text})}
          />
      <TextInput
          style={styles.text}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text)=> this.setState({text})}
          />
        <TextInput
          style={styles.text}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={(text)=> this.setState({text})}
          />
          <TouchableHighlight onPress ={this.onButtonPress.bind(this)} style = {styles.button}>
            <Text style={styles.registeration}>
            Register
            </Text>
          </TouchableHighlight>

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
    height: 50,
    flex: 1
  },
  registeration: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'bold',
    height: 10,
    backgroundColor: '#f08080',
    padding: 25,
    alignItems: 'center',
    flex: 1/2,
    },

   button: {
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf:'stretch',

    }
});

module.exports = Register;
