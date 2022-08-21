import React from 'react';
import { SceneMall, SellerKarnouth } from '../../assets';
import { Inventory } from '../../components/Inventory';
import { LineWrapper } from '../../elements/LineWrapper';
import { useManagerSellerItems } from '../../hooks';
import {
  ContainerImgs,
  ContainerInventories,
  MallImg,
  SellerImg,
  ContainerWrapper,
} from './styles';

const Mall = () => {
  useManagerSellerItems();

  return (
    <>
      <ContainerImgs>
        <MallImg source={SceneMall} resizeMode="stretch" />
        <SellerImg source={SellerKarnouth} />
      </ContainerImgs>
      <ContainerInventories>
        <Inventory localPressed="sellerInventory" howManySlots={5} />
        <ContainerWrapper>
          <LineWrapper />
        </ContainerWrapper>

        <Inventory localPressed="mallInventory" howManySlots={25} />
      </ContainerInventories>
    </>
  );
};

export default Mall;
