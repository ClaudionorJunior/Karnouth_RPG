import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { AllMonsters } from '~/assets/Monsters/__monsters__';
import { CloseModalContainer } from '~/components/CloseModalContainer';
import { MonsterStatus } from '~/components/MonsterStatus';
import { Button } from '~/elements/Button';
import { Typography } from '~/elements/Typography';
import { normalizePixel } from '~/helpers';
import { RootState } from '~/store/@types';
import {
  BackgroundModal,
  ContainerModal,
  ModalFeedbackMonsters,
} from './styles';

interface ModalSelectMonsterProps {
  hideModalMonsters(): void;
  isVisible: boolean;
}

export const ModalSelectMonster = ({
  hideModalMonsters,
  isVisible,
}: ModalSelectMonsterProps) => {
  const monsterState = useSelector((state: RootState) => state.MonsterState);
  const navigation = useNavigation();

  const hasMonsterSelected = useMemo(
    () => !!monsterState.Monster?.name,
    [monsterState],
  );

  const handleCloseModal = () => {
    if (hasMonsterSelected) {
      hideModalMonsters();
    } else {
      navigation.dispatch(StackActions.replace('TabNavigator'));
    }
  };

  const AllMonstersData = useMemo(() => {
    return AllMonsters;
  }, [isVisible]);

  return (
    <ModalFeedbackMonsters visible={isVisible}>
      <BackgroundModal />

      <ContainerModal>
        <CloseModalContainer onPress={handleCloseModal} />
        <Typography text="Select one Monster" textSize="medium" />
        <FlatList
          style={{
            height: normalizePixel(240),
            marginBottom: normalizePixel(24),
          }}
          data={AllMonstersData}
          renderItem={({ item }) => <MonsterStatus monsterToRender={item} />}
          keyExtractor={item => item.name}
        />
        <Button text="Confirm" textSize="small" onPress={handleCloseModal} />
      </ContainerModal>
    </ModalFeedbackMonsters>
  );
};
