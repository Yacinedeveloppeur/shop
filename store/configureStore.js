import { createStore } from "redux";
import handleCart from "./reducers/cartReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, handleCart);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
