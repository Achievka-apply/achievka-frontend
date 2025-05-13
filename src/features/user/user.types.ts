// src/features/user/user.types.ts

export interface UserProfile {
    userId: string;
    email: string;
    name: string;
    surname: string;
    country: string;
    subscription: 'free' | 'plan1' | 'plan2' | 'plan3';
    phoneNumber: string;
    dateOfBirth: string;
    language: 'en' | 'kk' | 'ru';
}

export interface UserGetResponse {
    avatar: null;
    bio: string;
    email: string;
    first_name: string;
    last_name: string;
    updated_at: Date;
}
