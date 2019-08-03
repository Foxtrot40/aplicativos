/*
*
*		@author: Marcos Cabeceira
*   Talk is cheap, show me the code
*/

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native';
import { bgColor, height, itemsBGColor, textColor, filterImages, exercisesImages } from '../../assets/ConstantUtils';
import data from '../../assets/data.json';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FilterIcon from '../FilterIcon/FilterIcon';
import Exercise from '../Exercise/Exercise';
import { DrawerActions } from 'react-navigation-drawer';

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
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
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Entypo name="menu" color={textColor} size={30} />
        </TouchableOpacity>
      ),
      headerLeftContainerStyle: {
        marginHorizontal: "2%"
      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <SimpleLineIcons name="settings" color={textColor} size={20} />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        marginHorizontal: "2%"
      },
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ borderBottomColor: "gray", borderBottomWidth: StyleSheet.hairlineWidth }}></View>
        <View style={styles.filters}>
          <ScrollView
            horizontal
            contentContainerStyle={{
              alignItems: 'center'
            }}
          >
            {data.filters.map((filter, key) =>
              <FilterIcon key={key} image={filterImages[key]} filterName={filter.name} />
            )}
          </ScrollView>
        </View>

        <FlatList
          data={data.exercises}
          keyExtractor={(item, index) => item.name + index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => Alert.alert("", `Mais informações sobre ${item.name}`)}
            >
              <Exercise name={item.name} image={exercisesImages[index]} calories={item.calories} time={item.time} weight={item.weight} when={item.when} />
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: bgColor
  },
  filters: {
    marginTop: height * 0.02,
    backgroundColor: itemsBGColor,
    height: height * 0.1,
    borderRadius: 10,
    marginBottom: 15
  },
});

export default Home;