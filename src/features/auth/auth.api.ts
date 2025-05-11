// src/features/auth/auth.api.ts

import { CredentialResponse } from "@react-oauth/google";
import { AuthResponse, LoginCredentials, PasswordResetBody, PasswordResetConfirmBody, RegisterCredentials } from "./auth.types"
import { apiRequest } from "../../api/api";

export const loginRequest = (body: LoginCredentials): Promise<AuthResponse> =>
    apiRequest({
        route: "auth/login",
        method: "POST",
        body,
    });

export const registerRequest = (body: RegisterCredentials) =>
    apiRequest({
        route: "auth/register",
        method: "POST",
        body,
    });

export const logoutRequest = () =>
    apiRequest({
        route: "auth/logout",
        method: "POST",
    })

export const refreshTokenRequest = (): Promise<AuthResponse> =>
    apiRequest({
        route: "auth/token-refresh",
    })

export const oAuthRequest = (body: CredentialResponse): Promise<AuthResponse> =>
    apiRequest({
        route: "auth/oauth",
        method: "POST",
        body,
    })

export const passwordResetRequest = (body: PasswordResetBody) =>
    apiRequest({
        route: "auth/password_reset",
        method: "POST",
        body,
    })

export const passwordResetConfirmRequest = (body: PasswordResetConfirmBody) =>
    apiRequest({
        route: "auth/password_reset_confirm",
        method: "POST",
        body,
    })
