import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

const LoadingScreen = () => {
  return (
    <Container>
      <ActivityIndicator size={56} color="#d2d2d2" />
    </Container>
  );
};

export default LoadingScreen;
