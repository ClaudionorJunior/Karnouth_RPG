import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Item, LocalPressed } from '../../@types';
import { Button, Typography } from '../../Elements';
import {
  ModalFeedbackItems,
  ContainerModal,
  BackgroundModal,
  TextContainer,
} from './styles';

interface ModalItemDetailProps {
  show(item: Item, localPressed: LocalPressed): void;
  hide(): void;
}

const ModalItemDetailContext = createContext<ModalItemDetailProps>(
  {} as ModalItemDetailProps,
);

const useModalItemDetail = () => useContext(ModalItemDetailContext);

export const ModalItemDetailProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [itemToRender, setItemToRender] = useState<Item>();
  const [localPressedCtx, setLocalPressedCtx] = useState<LocalPressed>();

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

  const show = useCallback(
    (item: Item, localPressed: LocalPressed) => {
      setItemToRender(item);
      setLocalPressedCtx(localPressed);
      setIsVisible(true);
    },
    [isVisible],
  );

  const hide = useCallback(() => {
    setIsVisible(false);
    setItemToRender(undefined);
  }, [isVisible]);

  const handleUseSupportItem = useCallback(() => {}, [isVisible]);

  const handleEquipItem = useCallback(() => {}, [isVisible]);
  const handleUnEquipItem = useCallback(() => {}, [isVisible]);

  const handleLootItem = useCallback(() => {}, [isVisible]);

  const handleAction = useCallback(() => {
    hide();

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

  console.log('itemToRender', itemToRender);

  return (
    <ModalItemDetailContext.Provider value={{ hide, show }}>
      {children}
      <ModalFeedbackItems visible={isVisible}>
        <BackgroundModal onPress={hide} />
        <ContainerModal>
          <Typography text={`${itemToRender?.itemUIName}`} textSize="medium" />

          <TextContainer>
            <Typography
              text={`${itemToRender?.description}`}
              textSize="paragraphy"
            />
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
