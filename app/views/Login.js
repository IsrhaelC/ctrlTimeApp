import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase'

import { colors, fonts } from '../styles'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Login extends Component {

  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      errorMessage: null
    }
  }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => alert(error.message))
  }

  render() {
    return (
      <LinearGradient colors={['#3059FE', '#0AB5F5']} style={styles.container}>
        <Text style={styles.title}>{'Login'}</Text>
        <View style={styles.loginContainer}>
          <Icon name={'hourglass'} size={60} color={colors.primary} style={styles.icon}/>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <TouchableOpacity  onPress={() => this.handleLogin()}>
            <LinearGradient colors={['#0BCCEB', '#0A80F5']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={styles.buttonLogin}>
              <Text style={styles.buttonText}>{'Login'}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text>{'Or'}</Text>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('Signup')}>
            <LinearGradient colors={['#0BCCEB', '#0A80F5']} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} style={styles.buttonLogin}>
              <Text style={styles.buttonText}>{'Signup'}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 50
  },
  title: {
    fontSize: fonts.bigger,
    color: colors.white,
    fontFamily: 'Roboto'
  },
  loginContainer: {
    width: 280,
    height: 400,
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20
  },
  buttonLogin: {
    width: 230,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.big,
    fontFamily: 'Roboto'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderRadius: 10
  }
});
