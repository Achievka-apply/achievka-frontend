// src/store/user/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile } from './userTypes';

interface UserState {
  userProfile: UserProfile | null;
}

const initialState: UserState = {
  userProfile: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile(state, action: PayloadAction<UserProfile>) {
      state.userProfile = action.payload;
    },
    clearUserProfile(state) {
      state.userProfile = null;
    },
  },
});

export const { setUserProfile, clearUserProfile } = userSlice.actions;
export default userSlice.reducer;
