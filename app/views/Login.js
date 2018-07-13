import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { colors, fonts } from '../styles'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Login extends Component {
  render() {
    return (
      <LinearGradient colors={['#3059FE', '#0AB5F5']} style={styles.container}>
        <Text style={styles.title}>{'Login'}</Text>
        <View style={styles.loginContainer}>
          <Icon name={'hourglass'} size={60} color={colors.primary} style={styles.icon}/>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
            <LinearGradient colors={['#3B5998', '#3B5998']} style={styles.buttonLogin}>
              <Text style={styles.buttonText}>{'Login with Facebook'}</Text>
            </LinearGradient>
          </TouchableHighlight>
          <TouchableHighlight  onPress={() => this.props.navigation.navigate('Home')}>
            <LinearGradient colors={['#00ACED', '#00ACED']} style={styles.buttonLogin}>
              <Text style={styles.buttonText}>{'Login with Twitter'}</Text>
            </LinearGradient>
          </TouchableHighlight>
          <Text style={styles.textSign}>{'Or'}</Text>
          <TouchableHighlight  onPress={() => this.props.navigation.navigate('Signup')}>
            <LinearGradient colors={['#0BCCEB', '#0A80F5']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={styles.buttonLogin}>
              <Text style={styles.buttonText}>{'Signup'}</Text>
            </LinearGradient>
          </TouchableHighlight>
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
  textSign: {
    color: colors.dark,
    fontSize: fonts.big,
    fontFamily: 'Roboto'
  }
});
