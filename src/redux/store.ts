import { configureStore } from "@reduxjs/toolkit";
import { universityApi } from "./universityApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [universityApi.reducerPath]: universityApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(universityApi.middleware);
  },
});

setupListeners(store.dispatch);
