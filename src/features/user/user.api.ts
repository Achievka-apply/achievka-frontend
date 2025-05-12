import { apiRequest } from "../../api/api";
import { UserGetResponse } from "./user.types";

export const fetchUserProfile = async (): Promise<UserGetResponse> =>
    apiRequest({
        route: 'auth/profile',
    });