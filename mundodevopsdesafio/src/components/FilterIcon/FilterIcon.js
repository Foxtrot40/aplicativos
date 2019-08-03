/*
*
*		@author: Marcos Cabeceira
*		Talk is cheap, show me the code
*/

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { width } from '../../assets/ConstantUtils';

const filtericon = props => (
  <TouchableOpacity
    onPress={() => Alert.alert("", `Filtro ${props.filterName} selecionado`, [{ text: "Ok", onPress: null }])}
  >
    <LinearGradient
      colors={["#7F38F4", "#F22B48"]}
      style={styles.linearGradient}>
      <Image source={props.image} />
      {Math.random() >= 0.2 ? (
        <View
          style={styles.notificationIcon}
        >
          <AntDesign size={10} color="white" name="check" />
        </View>
      ) : null}
    </LinearGradient>
  </TouchableOpacity>

);

const styles = StyleSheet.create({
  linearGradient: {
    width: width * 0.14,
    height: "70%",
    borderWidth: 1,
    borderColor: 'red',
    marginHorizontal: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45
  },
  notificationIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: "30%",
    width: "30%",
    backgroundColor: "#19B996",
    borderRadius: 45,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default filtericon;