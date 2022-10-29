import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchTodoList, { TodoListType } from 'api/fetch-todoLists';

type InitialState = {
  todoLists: TodoListType[];
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  todoLists: [],
  loading: false,
  error: null,
};

export const getTodoLists = createAsyncThunk<TodoListType[], string>(
  'todoLists/addTodoLists',
  async (baseUrl: string) => {
    const data = await fetchTodoList.getTodoLists(baseUrl);
    return data;
  },
);

const todoListSlice = createSlice({
  name: 'todoLists',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTodoLists.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTodoLists.fulfilled, (state, action) => {
        state.todoLists = action.payload;
        state.loading = false;
      });
  },
});

export default todoListSlice;
