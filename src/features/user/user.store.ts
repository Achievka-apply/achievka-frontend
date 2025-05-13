// src/features/user/user.store.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserGetResponse } from './user.types';

interface UserState {
  userProfile: UserGetResponse | null;
}

const initialState: UserState = {
  userProfile: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile(state, action: PayloadAction<UserGetResponse>) {
      state.userProfile = action.payload;
    },
    clearUserProfile(state) {
      state.userProfile = null;
    },
  },
});

export const { setUserProfile, clearUserProfile } = userSlice.actions;
export default userSlice.reducer;
