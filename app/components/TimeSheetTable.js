import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../styles'
import { AsyncStorage } from 'react-native'
import { constaints } from '../config'
import moment from 'moment';
import momentDuration from 'moment-duration-format';

export default class TimeSheetTable extends Component {

  constructor () {
    super()
    this.state = {
      punchs: [],
      regularHours: {
        today: '',
        week: '',
        month: '',
        payPeriod: ''
      },
      punchToday: {
      in: '',
      out: '',
      }
    }
  }

  componentDidMount () {
    AsyncStorage.getItem(constaints.USER_PUNCH).then(punchs => {
      this.countHours(JSON.parse(punchs));
    })
  }

  countHours = (punchs) => {
    const today = moment(new Date()).format("DD/MM/YYYY");
    punchs.map(punch => {
      if(punch.date === today){
        if(punch.punchType === 'normal' && punch.inOut === 'in'){
          alert(punch.dateForCalc)
          this.setState({punchToday: {in: punch.dateForCalc}})
        }
        if(punch.punchType === 'normal' && punch.inOut === 'out'){
          this.setState({punchToday: {in: punch.dateForCalc}})
        }
      }
    })
    alert(this.state.punchToday.in)
    if(this.state.punchToday.in != '' && this.state.punchToday.out != ''){
      var date1 = moment(this.state.punchToday.in);
      var date2 = moment(this.state.punchToday.out);
      var hoursToday = date1.diff(date2)
      this.setState({
        regularHours: {
          today: momentDuration.duration(hoursToday, "minutes").format()
        }
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{"worked time"}</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>{"regular time"}</Text>
            <Text style={styles.tableHeaderText}>{"extra time"}</Text>
          </View>
          <View style={styles.tableBody}>
            <View style={styles.tableRow}>
              <Text style={styles.rowText}>{"today: " + this.state.regularHours.today ? this.state.regularHours.today : 'None'}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.rowText}>{"week"}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.rowText}>{"month"}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.rowText}>{"pay period"}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '80%',
  },
  header: {
    backgroundColor: colors.primary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    color: colors.white,
    fontSize: fonts.big
  },
  table: {
    padding: 10,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    paddingLeft: 80,
    justifyContent: 'space-around',
    height: 25,
    alignItems: 'center'
  },
  tableHeaderText: {
    fontWeight: 'bold'
  },
  tableBody: {
    height: 150,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  tableRow: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.lighter,
    height: '25%'
  }
});