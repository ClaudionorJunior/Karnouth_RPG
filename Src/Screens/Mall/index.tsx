import React from 'react';
import { SceneMall, SellerKarnouth } from '../../Assets';
import { Inventory } from '../../Components';
import { LineWrapper } from '../../Elements';
import { useManagerSellerItems } from '../../Hooks';
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
