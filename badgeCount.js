
// ...
// import component
import BadgeCount from 'components/badgeCount';

// ...

{
  // Route Example with Natigation 
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'DashBoard') {
        iconName = 'dashboard';
      } else if (routeName === 'Instant') {
        iconName = 'clock-o';
      } else if (routeName === 'PropertiesNavigation') {
        iconName = 'home';
      } else if (routeName === 'ChatNew') {
        iconName = 'wechat';
      } else if (routeName === 'Profile') {
        iconName = 'user-circle';
      } else if (routeName === 'Layout') {
        iconName = 'wrench';
      }
      return (
        <View>
          <Icon name={iconName} size={24} color={tintColor} />
          { iconName === 'wechat'
            ? (
              <BadgeCount notificationCount={9} />
            )
            : null
          }
        </View>
      );
    },
  }),
  tabBarOptions: {
    activeTintColor: colors.orange,
    inactiveTintColor: colors.gray2,
    style: {
      backgroundColor: colors.gray,
      borderTopWidth: 0,
      borderTopColor: colors.white,
    },
  },

  // ...



// Component Badge Count 
import React, { Component } from 'react';
import {
  View, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class BadgeCount extends Component {
  static propTypes = {
    notificationCount: PropTypes.number,
  };

  static defaultProps = {
    notificationCount: 0,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      notificationCount,
    } = this.props;

    return (
      notificationCount > 0
      ? (
        <View style={styles.badgeContent}>
          <Text style={styles.badgeTxt}>{notificationCount}</Text>
        </View>
      )
      : null
    );
  }
}

// Styles 
import { StyleSheet } from 'react-native';

import { colors, text, metrics } from 'styles';

const styles = StyleSheet.create({
  badgeContent: {
    position: 'absolute',
    top: -2,
    right: -8,
    marginTop: -1,
    minWidth: 16,
    height: 16,
    borderRadius: 14,
    paddingHorizontal: 3,
    paddingVertical: 0,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: colors.red,
    backgroundColor: colors.red,
  },
  badgeTxt: {
    ...text.badgeText,
  },
});

export default styles;
