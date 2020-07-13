import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.65,
}))`
  flex-direction: row;
  margin-bottom: 5%;
  padding: 0 5%;
  width: 100%;
`;
export const ImageContainer = styled.View`
  box-shadow: 0px 5px 5px gray;
  width: 30%;
  margin-right: 2.5%;
  align-items: center;
  justify-content: center;
`;

export const PosterImage = styled.Image.attrs(() => ({
  resizeMode: 'contain',
}))`
  width: ${scale(150)}px;
  height: ${scale(150)}px;
`;

export const MovieInfoContainer = styled.View`
  padding: 2.5%;
  justify-content: space-around;
  width: 70%;
`;

export const MovieTitle = styled.Text`
  font-size: ${scale(14)}px;
  font-weight: 600;
  width: 100%;
`;

export const RottenTomatoesIcon = styled.Image.attrs(() => ({
  source: { uri: 'RottenTomatoes' },
}))`
  width: ${scale(15)};
  height: ${scale(15)};
`;

export const MovieScheduleContainer = styled.View`
  flex-direction: row;
`;

export const MovieTime = styled.Text`
  font-weight: 300;
  background-color: lightgrey;
  border-radius: 8;
  margin-right: 2.5%;
  overflow: hidden;
  padding: 0 2.5%;
  text-align: center;
`;
