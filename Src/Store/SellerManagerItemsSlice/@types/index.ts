import { Item } from '../../../@types';

export interface SellerManagerItemsState {
  sellingItems: Item[];
  sellerManagerItemsError: string;
  lastSee?: number;
}
