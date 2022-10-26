import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTasks() {},
    removeTasks() {},
  },
});

export const todoListActions = todoListSlice.actions;

export default todoListSlice;
