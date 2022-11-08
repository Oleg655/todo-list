import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth-slice';
import tasksSlice from './tasks-slice';
import todoListsSlice from './todo-lists-slice';

const store = configureStore({
  reducer: {
    todoList: todoListsSlice.reducer,
    tasks: tasksSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
