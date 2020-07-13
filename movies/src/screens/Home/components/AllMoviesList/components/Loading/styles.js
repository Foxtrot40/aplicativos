import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';

export const Container = styled.View`
  align-items: center;
  margin-top: 15%;
`;

export const LoadingMessage = styled.Text`
  margin-top: 3%;
  font-size: ${scale(16)};
  font-weight: 700;
`;
