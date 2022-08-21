import styled from 'styled-components/native';
import { normalizePixel } from '~/helpers';

export const ContainerInventories = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroudColor};
  padding: ${normalizePixel(12)}px;
  padding-bottom: 0;
  align-items: center;
`;

export const ContainerImgs = styled.View``;
export const MallImg = styled.Image`
  height: ${normalizePixel(180)}px;
`;
export const SellerImg = styled.Image`
  position: absolute;
  height: ${normalizePixel(100)}px;
  width: ${normalizePixel(100)}px;
  bottom: 0;
  left: ${normalizePixel(130)}px;
`;

export const ContainerWrapper = styled.View`
  width: 100%;
  height: ${normalizePixel(30)}px;
  justify-content: center;
`;
