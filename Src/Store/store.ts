import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './reducers';

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
