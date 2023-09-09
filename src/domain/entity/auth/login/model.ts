import { CredentialToken } from "@domain/base/user/auth_token";
import { User } from "@domain/base/user/user";

export interface LoginResponse {
    access_token:     string;
    credential_token: CredentialToken;
    token_type:       string;
    user:             User;
}
