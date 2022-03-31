import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CounterSlice from './CounterSlice';

const store = configureStore({
  reducer: combineReducers({
    counter: CounterSlice,
  }),
});

export default store;
