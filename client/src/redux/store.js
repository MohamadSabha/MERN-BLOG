import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import themeReducer from "./theme/themeSlice"; // Import the theme reducer
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { persistReducer, persistStore } from "redux-persist";

// Combine your reducers
const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer, // Add the theme reducer
  // Add other reducers here as needed
});

// Config for redux-persist
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed to prevent errors with non-serializable values from redux-persist
    }),
});

// Create the persistor
export const persistor = persistStore(store);

// old way without persistor
// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });
