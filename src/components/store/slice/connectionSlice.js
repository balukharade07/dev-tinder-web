import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requests: [],
  connections: [],
};

const connectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    setRequests: (state, action) => {
      state.requests = action.payload;
    },

    setConnections: (state, action) => {
      state.connections = action.payload;
    },

    addRequest: (state, action) => {
      state.requests.push(action.payload);
    },

    removeRequest: (state, action) => {
      state.requests = state.requests.filter(
        (req) => req.id !== action.payload
      );
    },

    addConnection: (state, action) => {
      state.connections.push(action.payload);
    },

    removeConnection: (state, action) => {
      state.connections = state.connections.filter(
        (conn) => conn.id !== action.payload
      );
    },
  },
});

export const {
  setRequests,
  setConnections,
  addRequest,
  removeRequest,
  addConnection,
  removeConnection,
} = connectionSlice.actions;

export default connectionSlice.reducer;
