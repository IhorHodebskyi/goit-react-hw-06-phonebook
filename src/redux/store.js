// import { devToolsEnhancer } from '@redux-devtools/extension';

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contacts } from './contactSlice';
import { filter } from './filterSlice';

const commonReducer = combineReducers({ contacts, filter });

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['filter'],
};

const persistedContactsReducer = persistReducer(
  persistConfig,
  commonReducer,
);

export const store = configureStore({
  reducer: {
    app: persistedContactsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [
          FLUSH,
          PAUSE,
          REHYDRATE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    });
  },
});

export const persistor = persistStore(store);
