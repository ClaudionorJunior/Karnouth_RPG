import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from '~/store/state';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
