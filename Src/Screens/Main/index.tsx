import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import { SceneMain } from '../../Assets';
import { Button, Typography } from '../../Elements';
import { RootState } from '../../Store/state';
import { Container, MainImage, ButtonContainer } from './styles';

const Main = () => {
  const [isContinueDisabled, setIsContinueDisabled] = useState<boolean>(false);
  const playerState = useSelector((state: RootState) => state.playerState);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setIsContinueDisabled(!playerState.playerType);
    }, [playerState.playerType]),
  );

  const handleCreatePlayer = useCallback(() => {
    navigation.navigate('CreatePlayer' as never);
  }, []);

  const handleContinue = useCallback(() => {
    navigation.navigate('Home' as never);
  }, []);

  return (
    <Container>
      <MainImage source={SceneMain} />
      <Typography text="Karnouth RPG" textSize="great" />
      <ButtonContainer>
        <Button
          disabled={isContinueDisabled}
          onPress={handleContinue}
          text="Continue"
          textSize="small"
        />
        <Button
          onPress={handleCreatePlayer}
          text="Create a new player"
          textSize="small"
        />
      </ButtonContainer>
    </Container>
  );
};

export default Main;
