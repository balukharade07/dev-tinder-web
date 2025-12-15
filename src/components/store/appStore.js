import { configureStore, Tuple } from '@reduxjs/toolkit'
import userSlice from './userSlice';
import feedSlice from './feedSlice'
import utilSlice from './utilSlice'

const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: feedSlice,
    util: utilSlice
  }
});

export default appStore