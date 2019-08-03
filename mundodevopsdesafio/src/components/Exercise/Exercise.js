/*
*
*		@author: Marcos Cabeceira
*		Talk is cheap, show me the code
*/

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { itemsBGColor, height, bgColor, width, exercisesImages, exercisesInfoIcons, textColor, todayColor } from '../../assets/ConstantUtils';
import CustomText from '../CustomText/CustomText';

const Exercise = props => (
  <View style={styles.container}>

    {/* Avoid chopping view */}
    <View style={styles.avoidChoppingView}>

      {/* Exercise Image View */}
      <View style={styles.imageView}>
        <View style={styles.imageCircle}>
          <Image source={props.image} style={{ position: 'absolute', bottom: -15, left: -5 }} />
        </View>
      </View>

      {/* Exercise Information View */}
      <View style={styles.infoOutterView}>
        <View style={styles.infoInnerView}>

          {/* Name */}
          <CustomText text={props.name} capitalize additionalStyles={{ fontSize: height * 0.035, fontFamily: "Montserrat-Medium" }} />

          {/* Stats */}
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>

            {/* Stats icons where made into one json, for DRY component */}
            {exercisesInfoIcons.map((icon, key) =>
              <View key={key} style={{ flexDirection: 'row', justifyContent: 'center', width: width * 0.15 }}>
                <Image source={icon.image} />
                <CustomText additionalStyles={{ fontSize: width * 0.025, fontFamily: "Montserrat-Bold" }} text={" " + props.calories + " " + icon.prefix} />
              </View>
            )}
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.whenView, checkGreen(props.when)]}>
              <CustomText capitalize text={"hoje"} />
            </View>
            <View style={[styles.whenView, checkRed(props.when)]}>
              <CustomText capitalize text={"hoje"} text={"Ontem"} />
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
);

const checkRed = when => {
  if (when != "" && when === "yesterday") {
    return { backgroundColor: 'red', borderColor: 'red' }
  }
}

const checkGreen = when => {
  if (when != "" && when === "today") {
    return { backgroundColor: todayColor, borderColor: todayColor }
  }
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.15,
    width: "100%",
    backgroundColor: itemsBGColor,
    marginVertical: height * 0.02,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avoidChoppingView: {
    height: "90%",
    width: "100%",
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageView: {
    width: "30%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCircle: {
    backgroundColor: bgColor,
    width: "80%",
    height: "80%",
    borderRadius: 45,
  },
  infoOutterView: {
    height: '100%',
    width: "70%",
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: "8%"
  },
  infoInnerView: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
  },
  whenView: {
    paddingHorizontal: width * 0.040,
    borderColor: "gray",
    borderWidth: 0.9,
    borderRadius: 45,
    marginRight: width * 0.020
  },
  whenText: {
    color: 'gray'
  },
});

export default Exercise;