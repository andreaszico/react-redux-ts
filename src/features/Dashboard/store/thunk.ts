import { LoginResponse } from "@domain/entity/auth/login";
import { createAsyncThunk } from "@reduxjs/toolkit";
import ZStorage from "@shared/utils/z_storage";
import { AxiosError } from "axios";

const zStorage = ZStorage.getInstance();

export const getInitialUser = createAsyncThunk(
  "getInitialUser",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = await zStorage.getItem<LoginResponse>(
        ZStorage.accessTokenKey
      );

      if (accessToken) {
        const loginResponse = accessToken;
        return loginResponse.user;
      }

      return null;
    } catch (e) {
      rejectWithValue({ data: e as AxiosError });
    }
  }
);
