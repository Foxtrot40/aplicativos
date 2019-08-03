/*
*
*		@author: Marcos Cabeceira
*
*/

import React from 'react';
import { Text, StyleSheet} from 'react-native';
import { textColor } from '../../assets/ConstantUtils';

const customtext = props => (
  //Talk is cheap, show me the code
  <Text style={[styles.container, props.additionalStyles]}>
    {props.capitalize ? props.text.toUpperCase() : props.text}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    color: textColor,
    fontFamily: "Montserrat-Regular",
  }
});

export default customtext;