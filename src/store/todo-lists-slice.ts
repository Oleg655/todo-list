import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import fetchTodoList, { TodoListType, ResponseType } from 'api/fetch-todoLists';

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

type UpdateParametersData = {
  todoListId: string;
  todoListTitle: string;
};

type CreateParametersData = {
  todoListTitle: string;
};

type DeleteParametersData = {
  todoListId: string;
};

export const getTodoLists = createAsyncThunk<
  TodoListType[],
  undefined,
  { rejectValue: string }
>('todoLists/getTodoLists', async (_, { rejectWithValue }) => {
  const data = await fetchTodoList.getTodoLists();

  if (!data) {
    return rejectWithValue('Todo-lists not found');
  }

  return data;
});

export const updateTodoList = createAsyncThunk<
  { todoListId: string; todoListTitle: string },
  UpdateParametersData,
  { rejectValue: string }
>(
  'todoLists/updateTodoList',
  async ({ todoListId, todoListTitle }, { rejectWithValue }) => {
    const data = await fetchTodoList.updateTodoList(todoListId, todoListTitle);
    if (!data) {
      return rejectWithValue('Title is not assiagment');
    }

    return { todoListId, todoListTitle };
  },
);

export const createTodoList = createAsyncThunk<
  ResponseType<{ item: TodoListType }>,
  CreateParametersData,
  { rejectValue: string }
>('todoLists/createTodoList', async ({ todoListTitle }, { rejectWithValue }) => {
  const data = await fetchTodoList.createTodoList(todoListTitle);
  if (!data) {
    return rejectWithValue('Title is not assiagment');
  }

  return data;
});

export const deleteTodoList = createAsyncThunk<
  { todoListId: string },
  DeleteParametersData,
  { rejectValue: string }
>('todoLists/deleteTodoList', async ({ todoListId }, { rejectWithValue }) => {
  const data = await fetchTodoList.deleteTodoList(todoListId);
  if (!data) {
    return rejectWithValue('Title is not assiagment');
  }

  return { todoListId };
});

const isError = (action: AnyAction) => {
  return action.type.endsWith('rejected');
};

const todoListsSlice = createSlice({
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
      })
      .addCase(deleteTodoList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTodoList.fulfilled, (state, action) => {
        state.todoLists = state.todoLists.filter(todoList => {
          return todoList.id !== action.payload.todoListId;
        });
        state.loading = false;
      })
      .addCase(updateTodoList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTodoList.fulfilled, (state, action) => {
        const existTodoList = state.todoLists.find(todoList => {
          return todoList.id === action.payload.todoListId;
        });
        if (existTodoList) {
          existTodoList.title = action.payload.todoListTitle;
        }
        state.loading = false;
      })
      .addCase(createTodoList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTodoList.fulfilled, (state, action) => {
        state.todoLists.push(action.payload.data.item);
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default todoListsSlice;
