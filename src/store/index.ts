import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import Pokemon from './slices/pokemon';
import User from './slices/user';
import { pokemonApi } from '@/services/pokemon'
import { userApi } from '@/services/userAuth'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    Pokemon,
    User,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(pokemonApi.middleware)
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)