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

export default class ModalCustom extends Component {

  constructor() {
    super()
    this.state = {
      punchType: '',
      inOut: ''
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
              <Text style={styles.title}>Punch</Text>
              <View style={styles.contentGroup}>
                <Text style={styles.contentText}>Time: 16: 31</Text>
                <Text style={styles.contentText}>Date: 09/07/2018</Text>
                <View style={styles.contentSelect}>
                  <Text style={styles.contentText}>Punch Type</Text>
                  <Picker
                    selectedValue={this.state.punchType}
                    onValueChange={(itemValue) => this.setState({punchType: itemValue})}
                    style={styles.picker}>
                    <Picker.Item label="Normal" value="normal" />
                    <Picker.Item label="Lunch" value="lunch" />
                    <Picker.Item label="Break" value="break" />
                  </Picker>
                </View>
                <View style={styles.contentSelect}>
                  <Text style={styles.contentText}>In / Out</Text>
                  <Picker
                    selectedValue={this.state.inOut}
                    style={styles.picker}
                    onValueChange={(itemValue) => this.setState({inOut: itemValue})}>
                    <Picker.Item label="In" value="in" />
                    <Picker.Item label="Out" value="out" />
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
                    <Text style={styles.buttonText}>Confirm</Text>
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
    height: 300,
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
    height: 180,
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 20
  }
});
