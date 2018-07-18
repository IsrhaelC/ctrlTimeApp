import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Navbar from '../components/Navbar'
import IconButton from '../components/IconButton'
import TimeSheetTable from '../components/TimeSheetTable'
import ModalCustom from '../components/ModalPunch'
import ModalPreferences from '../components/ModalPreferences'
import firebase from 'react-native-firebase'

import { colors, fonts } from '../styles'

export default class Home extends Component {

  constructor () {
    super()
    this.state = {
      modalPunch: false,
      modalpreferences: false,
      currentUser: 'null',
      errorMessage: null
    }
  }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  handleSignOut = () => {
    firebase.auth().signOut()
      .then(() => this.props.navigation.navigate('Home'))
      .catch((error) => this.setState({ errorMessage: error.message }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar home={true} title={"Hi, " + this.state.currentUser.email}/>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('TimeSheet')}>
          <IconButton iconName={"docs"} iconSize={35} iconText={'timeSheet'}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({modalPunch: true})}>
          <IconButton iconName={"hourglass"} iconSize={35} iconText={'in/out'}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({modalpreferences: true})}>
          <IconButton iconName={"settings"} iconSize={35} iconText={'preferences'}/>
          </TouchableOpacity>
        </View>
        <TimeSheetTable />
        <TouchableOpacity style={styles.exitButton} onPress={this.handleSignOut}>
          <Text style={styles.buttonText}>{'Logout'}</Text>
        </TouchableOpacity>
        <ModalCustom visible={this.state.modalPunch} onCancel={() => this.setState({modalPunch: false})}/>
        <ModalPreferences visible={this.state.modalpreferences} onCancel={() => this.setState({modalpreferences: false})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1
  },
  exitButton: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 20,
    width: 150,
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.darker,
    fontSize: fonts.big,
    fontFamily: 'Roboto'
  }
});
