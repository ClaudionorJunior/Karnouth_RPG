import React from 'react';
import CloseModalContainer from '../../../../Components/CloseModalContainer';
import { Inventory } from '../../../../Components';
import { Typography } from '../../../../Elements';
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
    <BackgroundModal />

    <ContainerModal>
      <CloseModalContainer onPress={hideModalRewards} />
      <Inventory howManySlots={5} localPressed="rewards" />
      <Typography
        text="get your items then close modal"
        textSize="paragraphy"
      />
    </ContainerModal>
  </ModalFeedbackRewards>
);

export default ModalRewards;
