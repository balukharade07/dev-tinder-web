import { configureStore, Tuple } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import feedSlice from './feedSlice';
import utilSlice from './utilSlice';
import connectionSlice from './connectionSlice';

const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: feedSlice,
    util: utilSlice,
    connection: connectionSlice,
  },
});

export default appStore;
