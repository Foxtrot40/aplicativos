import React from 'react';
import {Container} from './styles';
import {Avatar} from 'react-native-material-ui';

const LeftComponent = () => (
  <Container onPress={() => alert('ola')} activeOpacity={0.8}>
    <Avatar icon="person" size={40} />
  </Container>
);

export default LeftComponent;
