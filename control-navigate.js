import React from 'react';

import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

// Pages from the project
import Screen1 from 'pages/screen1';
import Screen2 from 'pages/screen2';
import Screen3 from 'pages/screen3';

//STEP-4
const Screen1Tab = createStackNavigator({
  Screen1,
});

const Screen2Tab = createStackNavigator({
  Screen2,
});

const Screen3Tab = createStackNavigator({
  Screen3,
});

//STEP-3
const Tabs = createBottomTabNavigator({
  Screen1Tab,
  Screen2Tab,
  Screen3Tab,
}, {
  //CUSTOM CONFIG
  initialRouteName: 'Screen1Tab',
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Screen1Tab') {
        iconName = 'icon1';
      } else if (routeName === 'Screen2Tab') {
        iconName = 'icon2';
      } else if (routeName === 'Screen3Tab') {
        iconName = 'icon3';
      } 
      return <Icon name={iconName} size={24} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: colors.orange,
    inactiveTintColor: colors.black,
    style: {
      backgroundColor: colors.lighter,
      borderTopWidth: 0,
      borderTopColor: colors.lighter,
    },
    //do not display icon label
    showLabel: false,
  },
});

//STEP-2
const App = createStackNavigator({
  Tabs,
}, {
  headerMode: 'none',
});

//STEP-1 
const createNavigator = () => createSwitchNavigator({
  App: { screen: App },
}, {
  initialRouteName: 'App',
  headerMode: 'none',
});

export default createNavigator;
