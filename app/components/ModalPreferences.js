import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Picker
} from 'react-native';

import { colors, fonts } from '../styles'
import LinearGradient from 'react-native-linear-gradient';

export default class ModalPreferences extends Component {

  constructor() {
    super()
    this.state = {
      hoursDaily: '8',
      weekStart: 'monday'
    }
  }

  render() {
    return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.visible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <Text style={styles.title}>Preferences</Text>
              <View style={styles.contentGroup}>
                <View style={styles.contentSelect}>
                  <Text style={styles.contentText}>Hours Daily</Text>
                  <Picker
                    selectedValue={this.state.hoursDaily}
                    onValueChange={(itemValue) => this.setState({hoursDaily: itemValue})}
                    style={styles.picker}>
                    <Picker.Item label="4 hours" value="4" />
                    <Picker.Item label="5 hours" value="5" />
                    <Picker.Item label="6 hours" value="6" />
                    <Picker.Item label="7 hours" value="7" />
                    <Picker.Item label="8 hours" value="8" />
                    <Picker.Item label="9 hours" value="9" />
                    <Picker.Item label="10 hours" value="10" />
                    <Picker.Item label="11 hours" value="11" />
                    <Picker.Item label="12 hours" value="12" />
                  </Picker>
                </View>
                <View style={styles.contentSelect}>
                  <Text style={styles.contentText}>Week starts</Text>
                  <Picker
                    selectedValue={this.state.weekStart}
                    style={styles.picker}
                    onValueChange={(itemValue) => this.setState({weekStart: itemValue})}>
                    <Picker.Item label="Sunday" value="sunday" />
                    <Picker.Item label="Monday" value="monday" />
                    <Picker.Item label="Tuesday" value="tuesday" />
                    <Picker.Item label="Wednesday" value="wednesday" />
                    <Picker.Item label="Thursday" value="thursday" />
                    <Picker.Item label="Friday" value="friday" />
                    <Picker.Item label="Saturday" value="saturday" />
                  </Picker>
                </View>
              </View>
              <View style={styles.buttonGroup}>
                <TouchableOpacity onPress={this.props.onCancel}>
                  <LinearGradient colors={['#EB0B39', '#F5A8DB']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={styles.button}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onCancel}>
                  <LinearGradient colors={['#0A80F5', '#0BCCEB']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }} style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  modalContent: {
    backgroundColor: colors.white,
    width: 300,
    height: 200,
    borderRadius: 30,
    alignItems: 'center'
  },
  title: {
    fontSize: fonts.bigger,
    color: colors.dark,
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 20,
    width: 130,
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroup: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.big
  },
  contentSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contentText: {
    color: colors.dark,
    fontSize: fonts.big
  },
  picker: {
     height: 30, 
     width: 130,
  },
  contentGroup: {
    width: 270,
    justifyContent: 'space-between',
    paddingTop: 30,
  }
});
