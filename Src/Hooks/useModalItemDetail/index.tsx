import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlayerManagerItemsActions } from '../../store/PlayerManagerItemsSlice';
import { Item, LocalPressed } from '../../@types';
import { Button } from '../../elements/Button';
import { Typography } from '../../elements/Typography';
import {
  ModalFeedbackItems,
  ContainerModal,
  BackgroundModal,
  TextContainer,
} from './styles';
import { RootState } from '../../store/state';
import { PlayerStatusActions } from '../../store/PlayerStatusSlice';
import { SellerManagerItemsActions } from '../../store/SellerManagerItemsSlice';
import { LootManagerActions } from '../../store/LootManagerSlice';
import { CloseModalContainer } from '../../components/CloseModalContainer';

interface ModalItemDetailProps {
  showModalDetails(item: Item, localPressed: LocalPressed): void;
  hideModalDetails(): void;
}

const ModalItemDetailContext = createContext<ModalItemDetailProps>(
  {} as ModalItemDetailProps,
);

const useModalItemDetail = () => useContext(ModalItemDetailContext);

export const ModalItemDetailProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [itemToRender, setItemToRender] = useState<Item>();
  const [localPressedCtx, setLocalPressedCtx] = useState<LocalPressed>();
  const playerTypeState = useSelector(
    (state: RootState) => state.PlayerState.playerType,
  );
  const playerManagerItemsState = useSelector(
    (state: RootState) => state.PlayerManagerItemsState,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    /** @description This useEffect is to verify if item has been equiped ou unquiped and add or remove attibutes */
    if (playerManagerItemsState.addPlayerBodyItemSuccess) {
      dispatch(
        PlayerStatusActions.changePlayerAttributes({
          defense: itemToRender?.defense || 0,
          intelligence: itemToRender?.intelligence || 0,
          life: itemToRender?.restoreLife || 0,
          power: itemToRender?.power || 0,
          precision: itemToRender?.precision || 0,
          type: 'add',
        }),
      );
      dispatch(PlayerManagerItemsActions.resetAddPlayerBodyItemSuccess());
      setItemToRender(undefined);
    }
    if (playerManagerItemsState.unquipePlayerBodyItemSuccess) {
      dispatch(
        PlayerStatusActions.changePlayerAttributes({
          defense: itemToRender?.defense || 0,
          intelligence: itemToRender?.intelligence || 0,
          life: itemToRender?.restoreLife || 0,
          power: itemToRender?.power || 0,
          precision: itemToRender?.precision || 0,
          type: 'takeoff',
        }),
      );
      dispatch(PlayerManagerItemsActions.resetUnquipePlayerBodyItemSuccess());
      setItemToRender(undefined);
    }
  }, [
    itemToRender,
    playerManagerItemsState.addPlayerBodyItemSuccess,
    playerManagerItemsState.unquipePlayerBodyItemSuccess,
  ]);

  const showModalDetails = useCallback(
    (item: Item, localPressed: LocalPressed) => {
      setItemToRender(item);
      setLocalPressedCtx(localPressed);
      setIsVisible(true);
    },
    [isVisible],
  );

  const hideModalDetails = useCallback(() => {
    setIsVisible(false);
  }, [isVisible]);

  const handleEquipItem = useCallback(() => {
    if (!itemToRender?.usedBy || playerTypeState === itemToRender?.usedBy) {
      itemToRender &&
        dispatch(PlayerManagerItemsActions.addPlayerBodyItem(itemToRender));
    } else {
      dispatch(
        PlayerManagerItemsActions.setMessageError('you can not use this item'),
      );
    }
  }, [isVisible, itemToRender]);
  const handleUnEquipItem = useCallback(() => {
    itemToRender &&
      dispatch(PlayerManagerItemsActions.unquipePlayerBodyItem(itemToRender));
  }, [isVisible]);

  const handleSellItem = useCallback(() => {
    if (itemToRender?.sellFor) {
      dispatch(
        PlayerManagerItemsActions.removeOneItem({ id: itemToRender?.id }),
      );
      itemToRender?.sellFor &&
        dispatch(PlayerManagerItemsActions.addGoldCoin(itemToRender?.sellFor));
    } else {
      dispatch(
        PlayerManagerItemsActions.setMessageError(
          'not possible sell this item, contact suport',
        ),
      );
    }
  }, [isVisible]);

  const handleBuyItem = useCallback(() => {
    if (itemToRender?.buyFor) {
      dispatch(PlayerManagerItemsActions.removeGoldCoin(itemToRender?.buyFor));

      const currentAmount = playerManagerItemsState.bodyItems.filter(
        it => it?.itemId === 9999,
      )[0]?.amount;

      if (currentAmount) {
        if (currentAmount > itemToRender.buyFor) {
          dispatch(
            SellerManagerItemsActions.removeOneItem({ id: itemToRender?.id }),
          );
          dispatch(
            PlayerManagerItemsActions.addPlayerInventoryItem(itemToRender),
          );
        }
      }
    } else {
      dispatch(
        PlayerManagerItemsActions.setMessageError(
          'you can not buy this item, contact suport',
        ),
      );
    }
  }, [isVisible, playerManagerItemsState]);

  const handleLootItem = useCallback(() => {
    if (itemToRender?.itemId) {
      dispatch(PlayerManagerItemsActions.addPlayerInventoryItem(itemToRender));
    }

    if (itemToRender?.id) {
      dispatch(LootManagerActions.removeOneItem({ id: itemToRender.id }));
    }
  }, [itemToRender?.itemId]);

  const handleUseSupportItem = useCallback(() => {}, [isVisible]);

  const handleAction = useCallback(() => {
    hideModalDetails();

    if (itemToRender?.itemType === 'potion' && localPressedCtx !== 'rewards') {
      handleUseSupportItem();
      return;
    }

    if (localPressedCtx === 'body') {
      handleUnEquipItem();
      return;
    }

    if (localPressedCtx === 'rewards') {
      handleLootItem();
      return;
    }

    if (localPressedCtx === 'mallInventory') {
      handleSellItem();
      return;
    }

    if (localPressedCtx === 'sellerInventory') {
      handleBuyItem();
      return;
    }

    handleEquipItem();
  }, [isVisible]);

  const btnText = useMemo((): string => {
    if (itemToRender?.itemType === 'potion' && localPressedCtx !== 'hunt') {
      return 'Use';
    }

    switch (localPressedCtx) {
      case 'inventory':
        return 'Equip';
      case 'body':
        return 'Unquip';
      case 'hunt':
        return 'Inventory';
      case 'sellerInventory':
        return 'Buy';
      case 'rewards':
        return 'Loot Item';
      default:
        return 'Sell';
    }
  }, [itemToRender, localPressedCtx]);

  return (
    <ModalItemDetailContext.Provider
      value={{ hideModalDetails, showModalDetails }}
    >
      {children}
      <ModalFeedbackItems visible={isVisible}>
        <BackgroundModal />
        <ContainerModal>
          <CloseModalContainer onPress={hideModalDetails} />
          <Typography text={`${itemToRender?.itemUIName}`} textSize="medium" />

          <TextContainer>
            <Typography
              text={`${itemToRender?.description}`}
              textSize="paragraphy"
            />
          </TextContainer>
          {!!itemToRender?.power && (
            <TextContainer>
              <Typography text="pwr: " textSize="paragraphy" />
              <Typography
                text={`${itemToRender?.power}`}
                textSize="paragraphy"
              />
            </TextContainer>
          )}
          {!!itemToRender?.defense && (
            <TextContainer>
              <Typography text="def: " textSize="paragraphy" />
              <Typography
                text={`${itemToRender?.defense}`}
                textSize="paragraphy"
              />
            </TextContainer>
          )}
          {!!itemToRender?.precision && (
            <TextContainer>
              <Typography text="prec: " textSize="paragraphy" />
              <Typography
                text={`${itemToRender?.precision}`}
                textSize="paragraphy"
              />
            </TextContainer>
          )}
          {!!itemToRender?.intelligence && (
            <TextContainer>
              <Typography text="int: " textSize="paragraphy" />
              <Typography
                text={`${itemToRender?.intelligence}`}
                textSize="paragraphy"
              />
            </TextContainer>
          )}
          {!!itemToRender?.restoreLife && (
            <TextContainer>
              <Typography text="restore life: " textSize="paragraphy" />
              <Typography
                text={`${itemToRender?.restoreLife}`}
                textSize="paragraphy"
              />
            </TextContainer>
          )}
          {!!itemToRender?.amount && (
            <TextContainer>
              <Typography text="amount: " textSize="paragraphy" />
              <Typography
                text={`${itemToRender?.amount}`}
                textSize="paragraphy"
              />
            </TextContainer>
          )}
          {!!itemToRender?.buyFor && (
            <TextContainer>
              <Typography text="buy for: " textSize="paragraphy" />
              <Typography
                text={`${itemToRender?.buyFor} golds`}
                textSize="paragraphy"
              />
            </TextContainer>
          )}
          {!!itemToRender?.sellFor && (
            <TextContainer>
              <Typography text="sell for: " textSize="paragraphy" />
              <Typography
                text={`${itemToRender?.sellFor} golds`}
                textSize="paragraphy"
              />
            </TextContainer>
          )}
          <Button
            text={btnText}
            textSize="small"
            onPress={handleAction}
            disabled={itemToRender?.itemType === 'gold'}
          />
        </ContainerModal>
      </ModalFeedbackItems>
    </ModalItemDetailContext.Provider>
  );
};

export default useModalItemDetail;
