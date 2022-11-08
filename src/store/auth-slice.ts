import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authorization, { RequestPayload, Response } from 'api/fetch-authorization';

type InitialState = {
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  isLoggedIn: false,
  loading: false,
  error: null,
};

type LoginParamsType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const authLogin = createAsyncThunk<
  RequestPayload,
  LoginParamsType,
  { rejectValue: string }
>('auth/authLogin', async ({ email, password, rememberMe }, { rejectWithValue }) => {
  const data: Response<RequestPayload> = await authorization.login(
    email,
    password,
    rememberMe,
  );

  if (!data) {
    return rejectWithValue('Todo-lists not found');
  }

  return data.data;
});

const authSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authLogin.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLogin.fulfilled, state => {
        state.isLoggedIn = true;
        state.loading = false;
      });
  },
});

export default authSlice;
