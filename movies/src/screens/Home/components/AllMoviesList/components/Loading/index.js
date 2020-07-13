import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, LoadingMessage } from './styles';
import { purpleColor } from 'movies/src/sharedServices/designConstants';

const Loading = () => (
  <Container>
    <ActivityIndicator size="large" color={purpleColor} />
    <LoadingMessage>Loading list...</LoadingMessage>
  </Container>
);

export { Loading };
