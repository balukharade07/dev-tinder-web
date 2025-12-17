import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  signUpUser,
  updateUser,
} from '../Thunk/userThunk';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => (state.user = action.payload),
    removeUser: (state) => (state.user = null),
  },
  extraReducers: (builder) => {
    handleAsyncCases(builder, loginUser);
    handleAsyncCases(builder, updateUser);
    handleAsyncCases(builder, signUpUser);
    handleAsyncCases(builder, logoutUser);
  },
});

export const handleAsyncCases = (builder, asyncThunk) => {
  builder
    .addCase(asyncThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(asyncThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(asyncThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
};

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
