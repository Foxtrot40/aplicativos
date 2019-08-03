import React from 'react';
import { bgColor, textColor } from "../../assets/ConstantUtils";
import { TouchableOpacity } from "react-native-gesture-handler";
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const navigationOptions = {
  title: "MEU PERFIL",
  headerStyle: {
    backgroundColor: bgColor,
    elevation: 0,
  },
  headerTitleStyle: {
    fontFamily: "Montserrat-Regular",
    color: textColor
  },
  headerLeft: (
    <TouchableOpacity onPress={() => {}}>
      <Entypo name="menu" color={textColor} size={30} />
    </TouchableOpacity>
  ),
  headerLeftContainerStyle: {
    marginHorizontal: "2%"
  },
  headerRight: (
    <TouchableOpacity onPress={() => {}}>
      <SimpleLineIcons name="settings" color={textColor} size={20} />
    </TouchableOpacity>
  ),
  headerRightContainerStyle: {
    marginHorizontal: "2%"
  },
} 