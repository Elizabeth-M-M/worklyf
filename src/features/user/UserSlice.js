import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const checkUserInServer = createAsyncThunk(
  "user/loginUser",
  async (user) => {
    const res = await fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((resp) => resp.json());
    document.cookie = `userid=${res.id}`;
    return res;
  }
);
export const getUser = createAsyncThunk("user/getUser", async ({id}) => {

  const res = await fetch(`http://localhost:3000/users/${id}`).then((data) =>
    data.json()
  );

  return res;
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = [action.payload];
    },
    [getUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default userSlice.reducer;
