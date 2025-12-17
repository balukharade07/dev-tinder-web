import { createAsyncThunk } from '@reduxjs/toolkit';
import authServer from './../../api/authServer';
import userServer from '../../api/userServer';

export const loginUser = createAsyncThunk(
  '/login',
  async (payload, { rejectWithValue }) => {
    try {
      return await authServer.login(payload);
    } catch (error) {
      return rejectWithValue(error || 'Failed to fetch users');
    }
  },
);

export const logoutUser = createAsyncThunk(
  '/logout',
  async (_, { rejectWithValue }) => {
    try {
      await authServer.logout();
      return null;
    } catch (error) {
      return rejectWithValue(error || 'Failed to fetch users');
    }
  },
);

export const signUpUser = createAsyncThunk(
  '/signup',
  async (payload, { rejectWithValue }) => {
    try {
      return await authServer.signup(payload);
    } catch (error) {
      return rejectWithValue(error || 'Failed to fetch users');
    }
  },
);

export const updateUser = createAsyncThunk(
  '/update',
  async ({ _id, ...payload }, { rejectWithValue }) => {
    const userInfo = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      gender: payload.gender,
      age: payload.age,
    };

    try {
      return await userServer.update(_id, userInfo);
    } catch (error) {
      return rejectWithValue(error || 'Failed to fetch users');
    }
  },
);
