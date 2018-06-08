import React from 'react'
import {Button, View, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {lightRoom} from '../redux/actions'
//import {lightRoom} from '../redux/actions'

class SettingsScreen extends React.Component {
  state = {
    api_key: 'z6jeAd-8LsGEBCtEkluBMgxCmUhh0DaZvM9mORKg',
  }
  
  componentWillMount() {
    //Will Mount
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.navigation.navigate('Main')
    }
  }

  _lightOff = async () => {
    this.props.lightRoom(false, 254, 254, 10000)
  }
  
  _lightOn = async () => {
    this.props.lightRoom(true, 254, 254, 10000)
  }
  
  _changeColor = async () => {
    this.props.lightRoom(true, 254, 254, Math.floor(Math.random() * (65000 - 0) ) + 0);
  }

  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
      <Ionicons name={`ios-options${focused ? '' : '-outline'}`} size={25} color={tintColor} />
    ),
  }
  render() {
    return (
      <View style={styles.container}>
      <Button
        onPress={this._lightOn}
        title="Turn on light"
        color="green"
        accessibilityLabel="Turn the light on or off"
      />
      <Button
        onPress={this._lightOff}
        title="Turn off light"
        color="red"
        accessibilityLabel="Turn the light on or off"
      />
      <Button
        onPress={this._changeColor}
        title="Change Color"
        color="red"
        accessibilityLabel="Turn the light on or off"
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
})

const mapStateToProps = state => ({
  err: state.light.lightErr,
  token: state.light.lightValues,
})

export default connect(mapStateToProps, {lightRoom})(SettingsScreen)
