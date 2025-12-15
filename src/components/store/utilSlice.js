import { createSlice } from '@reduxjs/toolkit';

const utilSlice = createSlice({
  name: 'util',
  initialState: {
    toast: {
      message: '',
      type: '',
      show: false,
    },
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
  },
});

export const { removeToast, setToast } = utilSlice.actions;

export default utilSlice.reducer;
