
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
      <Image source={background} >
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
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress ={this.onButtonPress.bind(this)} style = {styles.buttonContainer}>
              <Text style={styles.buttonText}>
              Register
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
  },

  imageContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    backgroundColor: 'transparent'
  },

  textContainer:{
    justifyContent:'center',
    flex:2,
    backgroundColor:'transparent'
  },

  buttonContainer: {
    flex:1/2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'stretch',
    backgroundColor: 'burlywood'
  },
  q:{
    opacity: .6,
  },


  text: {
    flex: 1,
    textAlign: 'left',
    color: 'gold',
    marginLeft: 10
  },



   buttonText: {
     textAlign: 'center',
     fontSize: 20,
     fontWeight:'bold',
     height: 10,
     width:400,
     padding: 25,
     alignItems: 'center',
     flex: 1,
     },
});

module.exports = Register;
