import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { SafeAreaView } from 'react-native';
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

  const isPotionType = useMemo(() => {
    return itemToRender && itemToRender.itemType === 'potion';
  }, [itemToRender]);

  const show = useCallback(
    (item: Item) => {
      setItemToRender(item);
      setIsVisible(true);
    },
    [isVisible],
  );

  const hide = useCallback(() => {
    setIsVisible(false);
  }, [isVisible]);

  const handleUseSupportItem = useCallback(() => {}, [isVisible]);

  const handleEquipItem = useCallback(() => {}, [isVisible]);

  const handleAction = useCallback(() => {
    hide();

    if (isPotionType) {
      handleUseSupportItem();
      return;
    }

    handleEquipItem();
  }, [isVisible]);

  return (
    <ModalItemDetailContext.Provider value={{ hide, show }}>
      {children}
      <SafeAreaView>
        <ModalFeedbackItems
          animationType="slide"
          transparent
          visible={isVisible}
        >
          <BackgroundModal onPress={hide} />
          <ContainerModal>
            <Typography
              text={`${itemToRender?.itemUIName}`}
              textSize="medium"
            />

            {itemToRender?.description && (
              <TextContainer>
                <Typography
                  text={`${itemToRender?.description}`}
                  textSize="paragraphy"
                />
              </TextContainer>
            )}
            {itemToRender?.defense && (
              <TextContainer>
                <Typography text="def: " textSize="paragraphy" />
                <Typography
                  text={`${itemToRender?.defense}`}
                  textSize="paragraphy"
                />
              </TextContainer>
            )}
            {itemToRender?.power && (
              <TextContainer>
                <Typography text="pwr: " textSize="paragraphy" />
                <Typography
                  text={`${itemToRender?.power}`}
                  textSize="paragraphy"
                />
              </TextContainer>
            )}
            {itemToRender?.precision && (
              <TextContainer>
                <Typography text="prec: " textSize="paragraphy" />
                <Typography
                  text={`${itemToRender?.precision}`}
                  textSize="paragraphy"
                />
              </TextContainer>
            )}
            {itemToRender?.intelligence && (
              <TextContainer>
                <Typography text="int: " textSize="paragraphy" />
                <Typography
                  text={`${itemToRender?.intelligence}`}
                  textSize="paragraphy"
                />
              </TextContainer>
            )}
            {isPotionType && (
              <TextContainer>
                <Typography text="restore life: " textSize="paragraphy" />
                <Typography
                  text={`${itemToRender?.restoreLife}`}
                  textSize="paragraphy"
                />
              </TextContainer>
            )}
            <Button
              text={isPotionType ? 'Use' : 'Equipe'}
              textSize="small"
              onPress={handleAction}
            />
          </ContainerModal>
        </ModalFeedbackItems>
      </SafeAreaView>
    </ModalItemDetailContext.Provider>
  );
};

export default useModalItemDetail;
