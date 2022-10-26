import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTasks() {},
    removeTasks() {},
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice;
