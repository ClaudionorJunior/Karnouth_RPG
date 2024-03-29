import { Item } from '~/@types';

export interface PlayerManagerItemsState {
  bodyItems: Item[];
  inventoryItems: Item[];
  playerManagerItemsError: string;
  addPlayerBodyItemSuccess?: boolean;
  unquipePlayerBodyItemSuccess?: boolean;
}
