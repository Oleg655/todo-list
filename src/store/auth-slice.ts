import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authorization, { AuthLoginResponse, Response } from 'api/fetch-authorization';

type InitialState = {
  isLoggedIn: boolean;
  me: boolean;
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  isLoggedIn: false,
  me: false,
  loading: false,
  error: null,
};

type LoginParamsType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const authLogin = createAsyncThunk<
  AuthLoginResponse,
  LoginParamsType,
  { rejectValue: string }
>('auth/authLogin', async ({ email, password, rememberMe }, { rejectWithValue }) => {
  const data: Response<AuthLoginResponse> = await authorization.login(
    email,
    password,
    rememberMe,
  );

  if (!data) {
    return rejectWithValue('Todo-lists not found');
  }

  return data.data;
});

export const authLogout = createAsyncThunk<Response, undefined, { rejectValue: string }>(
  'auth/authLogout',
  async (_, { rejectWithValue }) => {
    const data: Response = await authorization.logOut();

    if (!data) {
      return rejectWithValue('Todo-lists not found');
    }

    return data;
  },
);

export const authMe = createAsyncThunk<Response, undefined, { rejectValue: string }>(
  'auth/authMe',
  async (_, { rejectWithValue }) => {
    const data: Response = await authorization.me();

    if (data.resultCode === 1) {
      return rejectWithValue('Todo-lists not found');
    }

    return data;
  },
);

const authSlice = createSlice({
  name: 'auth',
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
      })
      .addCase(authLogout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authLogout.fulfilled, state => {
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(authMe.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authMe.fulfilled, state => {
        state.me = true;
        state.loading = false;
      });
  },
});

export default authSlice;
