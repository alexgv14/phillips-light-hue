import React from 'react'
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import SettingsScreen from './screens/SettingsScreen'
import {store, persistor} from './redux/store'

const MainStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    navigationOptions: {
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  }
)

MainStack.navigationOptions = {
  tabBarIcon: ({focused, tintColor}) => (
    <Ionicons name={`ios-contacts${focused ? '' : '-outline'}`} size={25} color={tintColor} />
  ),
}

const MainTabs = createBottomTabNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#a41034',
    },
  }
)

const AppNavigator = createSwitchNavigator({
  Main: MainTabs,
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
