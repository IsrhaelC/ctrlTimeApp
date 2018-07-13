import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Navbar from '../components/Navbar'

export default class TimeSheet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar home={true} title={"TimeSheet"}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});
