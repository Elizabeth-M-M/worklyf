import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};
export const getTasks = createAsyncThunk("task/getTasks", async ({ id }) => {
  return fetch(`https://worklyf.onrender.com/users/${id}/tasks`).then((res) =>
    res.json()
  );
});

export const addTask = createAsyncThunk(
  "task/addTask",
  async ({ id, task }) => {
    return fetch(`https://worklyf.onrender.com/users/${id}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then((res) => res.json());
  }
);

export const editTask = createAsyncThunk(
  "task/editTask",
  async ({ id, task }) => {
    const res = await fetch(`https://worklyf.onrender.com/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then((resp) => resp.json());
    return res;
  }
);

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async ({ id }) => {
    const res = await fetch(`https://worklyf.onrender.com/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    resetTasks: () => initialState,
  },
  extraReducers: {
    [getTasks.pending]: (state, action) => {
      state.loading = true;
    },
    [getTasks.fulfilled]: (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    },
    [getTasks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addTask.pending]: (state, action) => {
      state.loading = true;
    },
    [addTask.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.hasOwnProperty("errors")) {
        state.error = action.payload.errors;
      } else {
        state.error = null;
        state.tasks.push(action.payload);
      }
    },
    [addTask.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [editTask.pending]: (state, action) => {
      state.loading = true;
    },
    [editTask.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.hasOwnProperty("errors")) {
        state.error = action.payload.errors;
      } else {
        state.loading = false;
        state.error = null;
        state.tasks = state.tasks.map((task) => {
          if (task.id == action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        });
      }
    },
    [editTask.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteTask.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteTask.fulfilled]: (state, action) => {
      state.loading = false;
      const id = action.payload.url.split("/").slice(-1)[0];
      const indexOfTask = state.tasks.findIndex((item) => item.id == id);
      state.tasks.splice(indexOfTask, 1);
      state.tasks = state.tasks;
    },
    [deleteTask.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { resetTasks } = taskSlice.actions;

export default taskSlice.reducer;
