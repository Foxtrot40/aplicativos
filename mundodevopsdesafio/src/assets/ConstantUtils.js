import { Dimensions } from 'react-native';

export const bgColor = "#262F38";
export const itemsBGColor = "#323C47";
export const textColor = "#FEFFFF";
export const todayColor = "#19B996";
export const { width, height } = Dimensions.get('window');
export const filterImages = [
  require("./img/ic_yoga.png"),
  require("./img/ic_upper_body.png"),
  require("./img/ic_lower_body.png"),
  require("./img/ic_dance.png"),
  require("./img/ic_yoga.png")
]
export const exercisesImages = [
  require("./img/running.png"),
  require("./img/cycling.png"),
  require("./img/gym.png"),
  require("./img/yoga.png"),

]

export const exercisesInfoIcons = [
  {
    "image": require("./img/ic_bike.png"),
    "prefix": "h"
  },
  {
    "image": require("./img/ic_time.png"),
    "prefix": "Kg"
  },
  {
    "image": require("./img/ic_balance.png"),
    "prefix": "Kcal"
  },
]