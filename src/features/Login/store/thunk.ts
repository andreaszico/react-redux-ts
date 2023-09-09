import { LoginRequest } from "@domain/entity/auth/login";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginServices } from "@services/auth/login";
import { AxiosError } from "axios";

export const login = createAsyncThunk(
  "auth/signIn",
  async (body: LoginRequest, { rejectWithValue }) => {
    try {
      const res = await loginServices.signIn(body);
      return res.data.data;
    } catch (e) {
      rejectWithValue({ data: e as AxiosError });
    }
  }
);
