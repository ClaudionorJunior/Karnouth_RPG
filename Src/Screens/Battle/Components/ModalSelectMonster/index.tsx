import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { AllMonsters } from '../../../../Assets/Monsters/@types';
import { CloseModalContainer, MonsterStatus } from '../../../../Components';
import { Button, Typography } from '../../../../Elements';
import { normalizePixel } from '../../../../Helpers';
import { RootState } from '../../../../Store/state';
import {
  BackgroundModal,
  ContainerModal,
  ModalFeedbackMonsters,
} from './styles';

interface ModalSelectMonsterProps {
  hideModalMonsters(): void;
  isVisible: boolean;
}

const ModalSelectMonster = ({
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
          data={AllMonsters}
          renderItem={({ item }) => <MonsterStatus monsterToRender={item} />}
          keyExtractor={item => item.name}
        />
        <Button text="Confirm" textSize="small" onPress={handleCloseModal} />
      </ContainerModal>
    </ModalFeedbackMonsters>
  );
};

export default ModalSelectMonster;
