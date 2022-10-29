import { configureStore } from '@reduxjs/toolkit';

import tasksSlice from './tasks-slice';
import todoListSlice from './todo-list-slice';

const store = configureStore({
  reducer: { todoList: todoListSlice.reducer, tasks: tasksSlice.reducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
