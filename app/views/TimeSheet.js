import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';

import Navbar from '../components/Navbar'
import { colors, fonts } from '../styles'

export default class TimeSheet extends Component {

  constructor () {
    super()
    this.state = {
      daysOfweek: [
        {title: '1'},
        {title: '2'},
        {title: '3'},
        {title: '4'},
        {title: '5'},
        {title: '6'},
        {title: '7'},
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar home={true} title={"TimeSheet"}/>
        <ScrollView horizontal={true} style={styles.scrollContainer}>
          <View style={styles.timeContainer}>
            {this.state.daysOfweek.map((value, key) => {
              <View>
              <View style={styles.containerTitle}>
                <Text style={styles.title}>{'Thu, Apr 13'}</Text>
              </View>
              <View style={styles.daysContainer}>
                <View style={styles.inContainer}>
                  <Text style={styles.inText}>{'in: 8:11'}</Text>
                </View>
                <View style={styles.inContainer}>
                  <Text style={styles.inText}>{'break'}</Text>
                </View>
                <View style={styles.inContainer}>
                  <Text style={styles.inText}>{'lunch'}</Text>
                </View>
                <View style={styles.inContainer}>
                  <Text style={styles.inText}>{'expected out: 17:34'}</Text>
                </View>
              </View>
              </View>
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    width: 300,
    height: 200,
    backgroundColor: colors.dark
  },
  container: {
    alignItems: 'center',
  },
  timeContainer: {
    height: 200,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    marginTop: 10,
  },
  containerTitle: {
    width: 100,
    height: 24,
    backgroundColor: colors.primary,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8
  },
  title: {
    color: colors.white,
    fontSize: fonts.regular,
    fontWeight: 'bold'
  },
  daysContainer: {
    width: 200,
    height: 160,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  inContainer: {
    width: 150,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.dark,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
