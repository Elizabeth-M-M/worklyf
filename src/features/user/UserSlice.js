import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  loading: false,
  error: null,
};
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

export const createUserInServer = createAsyncThunk(
  "user/signupUser",
  async (user) => {
    const res = await fetch(`http://localhost:3000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((resp) => resp.json());
    return res;
  }
);

export const getUser = createAsyncThunk("user/getUser", async ({ id }) => {
  const res = await fetch(`http://localhost:3000/users/${id}`).then((data) =>
    data.json()
  );
  return res;
});

export const editUserProfileToServer = createAsyncThunk(
  "user/editProfile",
  async ({ id, profile }) => {
    const res = await fetch(`http://localhost:3000/profiles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    }).then((resp) => resp.json());
    return res;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: () => initialState,
  },
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
    [checkUserInServer.pending]: (state, action) => {
      state.loading = true;
    },
    [checkUserInServer.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.hasOwnProperty("errors")) {
        state.error = action.payload.errors;
      } else {
        state.error = null;
        state.user = [action.payload];
      }
    },
    [checkUserInServer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [createUserInServer.pending]: (state, action) => {
      state.loading = true;
    },
    [createUserInServer.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.hasOwnProperty("errors")) {
        state.error = action.payload.errors;
      } else {
        state.error = null;
      }
    },
    [createUserInServer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { resetUser} = userSlice.actions;
export default userSlice.reducer;
