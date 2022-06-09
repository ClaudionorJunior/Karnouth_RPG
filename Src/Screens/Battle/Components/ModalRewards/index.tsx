import React from 'react';
import { Inventory } from '../../../../Components';
import {
  BackgroundModal,
  ContainerModal,
  ModalFeedbackRewards,
} from './styles';

interface ModalRewardsProps {
  hideModalRewards(): void;
  isVisible: boolean;
}

const ModalRewards = ({ hideModalRewards, isVisible }: ModalRewardsProps) => (
  <ModalFeedbackRewards visible={isVisible}>
    <BackgroundModal onPress={hideModalRewards} />

    <ContainerModal>
      <Inventory howManySlots={5} localPressed="rewards" />
    </ContainerModal>
  </ModalFeedbackRewards>
);

export default ModalRewards;
