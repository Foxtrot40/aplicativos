/*
*
*		@author: Marcos Cabeceira
*		Talk is cheap, show me the code
*/

import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Settings extends Component {
  static navigationOptions = {
    title: "Configurações"
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Configurações...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Settings;