import CryptoReducer from "./slice/CartSlice"
import { combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

//Making it persistent to avoid loss of data on refresh... 
const persistConfig = {
    key: 'root',
    storage,
  }
  
  const rootReducer = combineReducers({
      CryptoReducer
    })
  
    const persistedReducer = persistReducer(persistConfig,rootReducer)
  
  export const store=configureStore({
      reducer:persistedReducer
  })
  
  export const persistor = persistStore(store);