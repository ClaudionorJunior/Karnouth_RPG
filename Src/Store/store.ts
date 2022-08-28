import { configureStore } from '@reduxjs/toolkit';
import { PERSIST, REHYDRATE } from 'redux-persist';
import { persistedReducer } from './reducers';

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST],
      },
    }),
});

export default store;
