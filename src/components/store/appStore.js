import { configureStore, Tuple } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import feedSlice from './slice/feedSlice';
import utilSlice from './slice/utilSlice';
import connectionSlice from './slice/connectionSlice';

const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: feedSlice,
    util: utilSlice,
    connection: connectionSlice,
  },
});

export default appStore;
