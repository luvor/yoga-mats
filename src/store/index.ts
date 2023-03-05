import { configureStore } from '@reduxjs/toolkit'
import cartReducer, { sliceName as cartSliceName } from './cart.slice'
import { useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    [cartSliceName]: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector<RootState>
export default store
