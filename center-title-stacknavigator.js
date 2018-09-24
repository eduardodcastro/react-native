import React, { Component } from 'react';
import {
  View,
  YellowBox,
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import { colors } from 'styles';
import styles from './styles';

class TitleHeader extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Meus Imóveis',
      headerStyle: {
        backgroundColor: colors.transparent,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'normal',
        fontSize: 20,
        color: '#606060',
      },
      headerTintColor: colors.darker,
      headerTruncatedBackTitle: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

export default TitleHeader;
