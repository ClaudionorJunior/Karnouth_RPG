import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, BackHandler } from 'react-native';
import { SceneMain } from '~/assets';
import { Typography } from '~/elements/Typography';
import { Button } from '~/elements/Button';
import { RootState } from '~/store/state';
import { Container, MainImage, ButtonContainer } from './styles';
import { PlayerStatusActions } from '~/store/PlayerStatus/slice';
import { PlayerManagerItemsActions } from '~/store/PlayerManagerItemsSlice';

const Main = () => {
  const [isContinueDisabled, setIsContinueDisabled] = useState<boolean>(false);
  const PlayerState = useSelector((state: RootState) => state.PlayerState);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setIsContinueDisabled(!PlayerState.playerType);
    }, [PlayerState.playerType]),
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
    if (PlayerState.playerType) {
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
  }, [PlayerState.playerType]);

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
