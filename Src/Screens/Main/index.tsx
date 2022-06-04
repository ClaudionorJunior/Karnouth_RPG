import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, BackHandler } from 'react-native';
import { SceneMain } from '../../Assets';
import { Button, Typography } from '../../Elements';
import { RootState } from '../../Store/state';
import { Container, MainImage, ButtonContainer } from './styles';
import { PlayerStatusActions } from '../../Store/PlayerStatusSlice';
import { PlayerManagerItemsActions } from '../../Store/PlayerManagerItemsSlice';

const Main = () => {
  const [isContinueDisabled, setIsContinueDisabled] = useState<boolean>(false);
  const playerState = useSelector((state: RootState) => state.playerState);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setIsContinueDisabled(!playerState.playerType);
    }, [playerState.playerType]),
  );

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const handleCreatePlayer = useCallback(() => {
    if (playerState.playerType) {
      Alert.alert(
        'Caution!',
        'If you press continue, you will lost your progress...',
        [
          {
            onPress: () => {},
            text: 'Cancel',
          },
          {
            onPress: () => {
              dispatch(PlayerStatusActions.resetAllStatus());
              dispatch(PlayerManagerItemsActions.resetAllItems());
              navigation.navigate('CreatePlayer' as never);
            },
            text: 'Continue',
          },
        ],
      );
      return;
    }
    navigation.navigate('CreatePlayer' as never);
  }, [playerState.playerType]);

  const handleContinue = useCallback(() => {
    navigation.navigate('TabNavigator' as never);
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
