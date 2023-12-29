import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uid: '',
  authRole: '',
  dept: '',
  rank: '',
  jobPosition: '',
  email: '',
  name: '',
  iat: 0,
  exp: 0,
  picture: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const {
        uid,
        authRole,
        dept,
        rank,
        jobPosition,
        email,
        name,
        iat,
        exp,
        isLoggedIn,
        picture,
      } = action.payload;

      state.uid = uid;
      state.authRole = authRole;
      state.dept = dept;
      state.rank = rank;
      state.jobPosition = jobPosition;
      state.email = email;
      state.name = name;
      state.iat = iat;
      state.exp = exp;
      state.isLoggedIn = isLoggedIn;
      state.picture = picture;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
