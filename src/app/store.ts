import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import categorieReducer from '../features/categorie/categorieSlice';
import authReducer from '../features/auth/authSlice';
import formationReducer from "./../features/formation/formationSlice";
import notificationReducer from "./../features/notifications/notificationSlices";
import { persistConfig } from './persist';
 
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    categorie: categorieReducer,
    auth: authReducer,
    formation: formationReducer,
    notification: notificationReducer
});
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})
 
let persistor = persistStore(store)
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export { persistor };
export default store
