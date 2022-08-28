import { useDispatch } from 'react-redux';
import { AppDispatch } from '~/store/state';

export const useAppDispatch = () => useDispatch<AppDispatch>();
