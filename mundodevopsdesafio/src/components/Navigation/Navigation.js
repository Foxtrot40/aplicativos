/*
*
*		@author: Marcos Cabeceira
*
*/

import React from 'react';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../Home/Home';
import Settings from '../Settings/Settings'

const drawerNavigation = createDrawerNavigator(
  {
    Home,
    Settings
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  });

const App = createStackNavigator(
  {
    Home,
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: "Configurações"
      }
    },
    drawerNavigation
  },
  {
    headerLayoutPreset: 'center'
  }
)

export default createAppContainer(App);