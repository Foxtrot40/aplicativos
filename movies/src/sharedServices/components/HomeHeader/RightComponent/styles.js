import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.3,
}))`
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;
