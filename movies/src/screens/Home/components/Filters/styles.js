import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  height: 15%;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;
export const FilterButton = styled.TouchableOpacity`
  background-color: ${({ isFilterDisabled }) =>
    isFilterDisabled ? 'white' : '#a237ff'};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 48%;
  height: 50px;
  padding: 0 3.5%;
  border: 0.5px solid #a237ff;
  box-shadow: ${({ isFilterDisabled }) =>
    isFilterDisabled ? '0px 0px 0px white' : '2px 2px 10px lightgray'};
  elevation: ${({ isFilterDisabled }) => (isFilterDisabled ? '0' : '20')};
`;
export const FilterButtonTitle = styled.Text`
  color: ${({ filterDisabled }) => (filterDisabled ? 'black' : 'white')};
  font-size: 14px;
`;
export const FilterButtonTrendingIcon = styled(Ionicons)`
  margin-right: 6%;
`;
export const FilterButtonNewReleasesIcon = styled(MaterialIcons)`
  margin-right: 6%;
`;
