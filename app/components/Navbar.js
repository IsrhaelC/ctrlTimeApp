import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { colors, metrics, fonts } from '../styles'

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        {!this.props.home &&
            <Icon name="arrow-left" size={24} style={styles.icon} />
        }
        <Text style={styles.title}> {this.props.title} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      width: "100%",
      height: metrics.tabBarHeight,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
    },
    title: {
        color: colors.white,
        fontSize: fonts.bigger,
    },
    icon: {
        color: colors.white,
    }
});