import styled from 'styled-components/native';
import { normalizePixel } from '~/helpers';

export const ModalFeedbackRewards = styled.Modal.attrs({
  animationType: 'slide',
  transparent: true,
})``;

export const BackgroundModal = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ContainerModal = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top-left-radius: ${normalizePixel(6)}px;
  border-top-right-radius: ${normalizePixel(6)}px;
  background-color: ${({ theme }) => theme.colors.backgroudColor};
  align-items: center;
  padding: ${normalizePixel(16)}px ${normalizePixel(24)}px
    ${normalizePixel(40)}px ${normalizePixel(24)}px;
`;
