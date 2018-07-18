import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ProgressBarAndroid
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase'

import { colors, fonts } from '../styles'
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Splash extends Component {

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      setTimeout(() => this.props.navigation.navigate(user ? 'Home' : 'Login'), 1000)
    })
  }

  render() {
    return (
      <LinearGradient colors={['#3059FE', '#0AB5F5']} style={styles.linearGradient}>
          <Icon name={'hourglass'} size={35} color={colors.white} />
          <View style={styles.textContainer}>
            <Text style={styles.titleStrong}>{'Ctrl'}</Text>
            <Text style={styles.titleNormal}>{'time'}</Text>
          </View>
          <View style={styles.progress}>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            color={colors.white}
          />
          </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingTop: 200,
    paddingBottom: 200,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  titleStrong: {
    color: colors.white,
    fontSize: fonts.bigger,
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
  titleNormal: {
    color: colors.white,
    fontSize: fonts.bigger,
    fontWeight: 'normal',
    fontFamily: 'Roboto'
  },
  textContainer: {
    flexDirection: 'row'
  },
  progress: {
    width: 80
  }
});
