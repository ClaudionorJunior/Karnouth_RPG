import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlayerManagerItemsActions } from '../../Store/PlayerManagerItemsSlice';
import { Item, LocalPressed } from '../../@types';
import { Button, Typography } from '../../Elements';
import {
  ModalFeedbackItems,
  ContainerModal,
  BackgroundModal,
  TextContainer,
} from './styles';
import { RootState } from '../../Store/state';
import { PlayerStatusActions } from '../../Store/PlayerStatusSlice';

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
    (state: RootState) => state.playerState.playerType,
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

  const handleUseSupportItem = useCallback(() => {}, [isVisible]);

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

  const handleLootItem = useCallback(() => {}, [isVisible]);

  const handleAction = useCallback(() => {
    hideModalDetails();

    if (itemToRender?.itemType === 'potion' && localPressedCtx !== 'hunt') {
      handleUseSupportItem();
      return;
    }

    if (localPressedCtx === 'body') {
      handleUnEquipItem();
      return;
    }

    if (localPressedCtx === 'hunt') {
      handleLootItem();
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
        <BackgroundModal onPress={hideModalDetails} />
        <ContainerModal>
          <Typography text={`${itemToRender?.itemUIName}`} textSize="medium" />

          <TextContainer>
            <Typography
              text={`${itemToRender?.description}`}
              textSize="paragraphy"
            />
          </TextContainer>
          <TextContainer>
            <Typography text="pwr: " textSize="paragraphy" />
            <Typography text={`${itemToRender?.power}`} textSize="paragraphy" />
          </TextContainer>
          <TextContainer>
            <Typography text="def: " textSize="paragraphy" />
            <Typography
              text={`${itemToRender?.defense}`}
              textSize="paragraphy"
            />
          </TextContainer>
          <TextContainer>
            <Typography text="prec: " textSize="paragraphy" />
            <Typography
              text={`${itemToRender?.precision}`}
              textSize="paragraphy"
            />
          </TextContainer>
          <TextContainer>
            <Typography text="int: " textSize="paragraphy" />
            <Typography
              text={`${itemToRender?.intelligence}`}
              textSize="paragraphy"
            />
          </TextContainer>
          <TextContainer>
            <Typography text="restore life: " textSize="paragraphy" />
            <Typography
              text={`${itemToRender?.restoreLife}`}
              textSize="paragraphy"
            />
          </TextContainer>
          <Button text={btnText} textSize="small" onPress={handleAction} />
        </ContainerModal>
      </ModalFeedbackItems>
    </ModalItemDetailContext.Provider>
  );
};

export default useModalItemDetail;
