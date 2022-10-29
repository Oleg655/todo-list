import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask() {},
    removeTask() {},
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice;
