import { createSlice } from '@reduxjs/toolkit';

export interface CurrentUser {
  user: any;
}

const initialState = {
    user: {
        name: '',
        email:'',
        role: 'UNKNOWN',
    },
} as CurrentUser;

const userSlice = createSlice({
  name: 'CurrentUser',
  initialState,
  reducers: {
    setCurrentUser: (state: CurrentUser, newState) =>
      (state = newState.payload as CurrentUser),
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
