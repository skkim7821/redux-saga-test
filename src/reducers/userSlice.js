import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "hello",
  data: {},
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setName(state, action) {
      return action.payload;
    },
    getUserData() {},
    getUserDataSucess(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setName, getUserData, getUserDataSucess } = usersSlice.actions;

export default usersSlice.reducer;
