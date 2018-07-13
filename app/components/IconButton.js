import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colors, fonts } from '../styles'

export default class IconButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
            <Icon name={this.props.iconName} size={this.props.iconSize} style={styles.icon} color={colors.white} />
        </View>
        <Text style={styles.iconText}>{this.props.iconText}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    iconContainer: {
      backgroundColor: colors.primary,
      width: 71,
      height: 71,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 14,
    },
    iconText: {
      color: colors.dark,
      fontSize: fonts.regular
    }
});