import { api } from "@api/api";
import { endpoint } from "@api/endpoints";
import { ResponseApi } from "@domain/base/response/model";
import { LoginRequest, LoginResponse } from "@domain/entity/auth/login";

class LoginServices {
  async signIn(payload: LoginRequest) {
    return api.post<ResponseApi<LoginResponse>>(endpoint.login, payload);
  }
}

export const loginServices = new LoginServices();
