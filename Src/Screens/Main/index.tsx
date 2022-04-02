import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { SceneMain } from '../../Assets';
import { Button, Typography } from '../../Elements';
import { Container, MainImage, ButtonContainer } from './styles';

const Main = () => {
  const navigation = useNavigation();

  const onCreatePlayer = useCallback(() => {
    navigation.navigate('CreatePlayer' as never);
  }, []);

  return (
    <Container>
      <MainImage source={SceneMain} />
      <Typography text="Karnouth RPG" textSize="great" />
      <ButtonContainer>
        <Button onPress={() => {}} text="Continue" textSize="small" />
        <Button
          onPress={onCreatePlayer}
          text="Create a new player"
          textSize="small"
        />
      </ButtonContainer>
    </Container>
  );
};

export default Main;
