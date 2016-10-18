
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

class Comm extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
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
        <Text style={styles.register}>Register</Text>

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
      register: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight:'bold',
        height: 10,
        backgroundColor: '#f08080',
        padding: 20,
        alignItems: 'center',
        flex: 1/2

    },
});

AppRegistry.registerComponent('Comm', () => Comm);
