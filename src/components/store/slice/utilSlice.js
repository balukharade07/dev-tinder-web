import { createSlice } from '@reduxjs/toolkit';

const utilSlice = createSlice({
  name: 'util',
  initialState: {
    toast: {
      message: '',
      type: '',
      show: false,
    },
    activeMenu: '',
  },
  reducers: {
    setToast: (state, action) => {
      state.toast = action.payload;
    },
    removeToast: (state) => {
      state.toast = {
        message: '',
        type: '',
        show: false,
      };
    },
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
  },
});

export const { removeToast, setToast, setActiveMenu } = utilSlice.actions;

export default utilSlice.reducer;
