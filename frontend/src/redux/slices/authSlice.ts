import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse, RegisterResponse, User } from "../../types";

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  loginError: string | null;
  registerError: string | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  loginError: null,
  registerError: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.loginError = null;
      state.token = action.payload.token;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loginError = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.loginError = null;
      state.token = null;
    },
    registerSuccess: (state, action: PayloadAction<RegisterResponse>) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.registerError = null;
      state.token = action.payload.token;
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.registerError = action.payload;
    },
  },
});

const { actions, reducer } = authSlice;

export const {
  loginSuccess,
  loginFailure,
  logout,
  registerSuccess,
  registerFailure,
} = actions;

export default reducer;
