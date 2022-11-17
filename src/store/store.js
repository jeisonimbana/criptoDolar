import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { criptoSlice } from './criptos/criptoSlice';



export const store = configureStore({
  reducer: {
      auth:     authSlice.reducer,
      criptos:     criptoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
  })
})