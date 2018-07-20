import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import TimeSheetTable from '../components/TimeSheetTable';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import firebase from 'react-native-firebase';
import moment from 'moment';

import Navbar from '../components/Navbar'
import { colors } from '../styles'

export default class TimeSheet extends Component {

  constructor () {
    super()
    this.state = {
      punchs: [],
      break: {
        in: '',
        out: ''
      },
      normal:{
        in: '',
        out: ''
      },
      lunch: {
        in: '',
        out: ''
      }
      
    }
  }

  componentDidMount () {
    const database = firebase.database();
     database.ref("punchs").on("value", snapshot => {
      const response = snapshot.val();
      const punchs = !!response ? Object.keys(response).map(uid => ({
            ...response[uid],
            uid
          }))
        : [];
      this.setState({ punchs });
    });

    const dateToday = moment(new Date()).format("DD/MM/YYYY")
    this.punchs.map(value => {
      if(value.date === dateToday){
        if(value.punchType === 'normal') {
          if(value.inOut === 'in'){
            this.setState({
              normal: {
                in: value.time
              }
            })
          } else {
            this.setState({
              normal: {
                out: value.time
              }
            })
          }
        } else if(value.punchType === 'lunch') {
          if(value.inOut === 'in'){
            this.setState({
              normal: {
                in: value.time
              }
            })
          } else {
            this.setState({
              normal: {
                out: value.time
              }
            })
          }
        } else if(value.punchType === 'break') {
          if(value.inOut === 'in'){
            this.setState({
              normal: {
                in: value.time
              }
            })
          } else {
            this.setState({
              normal: {
                out: value.time
              }
            })
          }
        }
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar home={true} title={"TimeSheet"}/>
        <CalendarStrip
          calendarAnimation={{type: 'sequence', duration: 100}}
            daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: colors.white}}
            style={{height: 100, paddingTop: 10, paddingBottom: 10, width: '100%', borderTopWidth: 3, borderColor: colors.white}}
            calendarHeaderStyle={{color: colors.white}}
            calendarColor={colors.primary}
            dateNumberStyle={{color: colors.white}}
            dateNameStyle={{color: colors.white}}
            highlightDateNumberStyle={{color: 'yellow'}}
            highlightDateNameStyle={{color: 'yellow'}}
            disabledDateNameStyle={{color: colors.dark}}
            disabledDateNumberStyle={{color: colors.dark}}
          />
        <View style={styles.timeContainer}>
          <View style={styles.inContainer}>
            <Icon name={'check'} size={18} color={colors.primary} style={styles.icon}/>
            <Text style={styles.inText}>{'normal: in: ' + this.state.normal.in ? this.state.normal.in : 'no data'}</Text>
          </View>
          <View style={styles.inContainer}>
            <Icon name={'control-pause'} size={18} color={colors.dark} style={styles.icon}/>
            <Text style={styles.inText}>{'break: in: ' + this.state.break.in ? this.state.break.in : 'no data' + '/ out: ' + this.state.break.out ? this.state.break.out : 'no data'}</Text>
          </View>
          <View style={styles.inContainer}>
            <Icon name={'cup'} size={18} color={'green'} style={styles.icon}/>
            <Text style={styles.inText}>{'lunch: in: ' + this.state.lunch.in ? this.state.lunch.in : 'no data' + '/ out: ' + this.state.lunch.out ? this.state.lunch.out : 'no data'}</Text>
          </View>
          <View style={styles.inContainer}>
            <Icon name={'close'} size={18} color={'red'} style={styles.icon}/>
            <Text style={styles.inText}>{'normal: out: ' + this.state.normal.out ? this.state.normal.out : 'expected out: '}</Text>
          </View>
        </View>
        <TimeSheetTable />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  timeContainer: {
    width: '100%',
    height: 150,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  inContainer: {
    width: 250,
    height: 28,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.dark,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10
  },
  inText: {
    fontWeight: 'bold'
  }
});
