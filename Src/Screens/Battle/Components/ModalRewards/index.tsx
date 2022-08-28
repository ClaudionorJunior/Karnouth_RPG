import React from 'react';
import { CloseModalContainer } from '~/components/CloseModalContainer';
import { Inventory } from '~/components/Inventory';
import { Typography } from '~/elements/Typography';
import {
  BackgroundModal,
  ContainerModal,
  ModalFeedbackRewards,
} from './styles';

interface ModalRewardsProps {
  hideModalRewards(): void;
  isVisible: boolean;
}

export const ModalRewards = ({
  hideModalRewards,
  isVisible,
}: ModalRewardsProps) => (
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
