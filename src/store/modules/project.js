import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uid: '',
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    uidPush: (state, action) => {
      const { uid } = action.payload;

      state.uid = uid;
    },
  },
});

export const { uidPush } = projectSlice.actions;
export default projectSlice.reducer;
