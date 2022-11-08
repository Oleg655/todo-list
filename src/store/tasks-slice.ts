import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchTasks, { GetTasksResponse, TaskType, Response } from 'api/fetch-tasks';
import { RootState } from 'store';

type InitialState = {
  tasks: TaskType[];
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  tasks: [],
  loading: false,
  error: null,
};

type GetParametersData = {
  todoListId: string | undefined;
};

type DeleteParametersData = {
  todoListId: string | undefined;
  taskId: string;
};

type CreateParametersData = {
  todoListId: string | undefined;
  taskTitle: string;
};

type UpdateTaskModel = {
  title?: string;
  description?: string;
  status?: number;
  priority?: number;
  startDate?: string;
  deadline?: string;
};

export const getTasks = createAsyncThunk<
  GetTasksResponse,
  GetParametersData,
  { rejectValue: string }
>('tasks/getTasks', async ({ todoListId }, { rejectWithValue }) => {
  const data: GetTasksResponse = await fetchTasks.getTasks(todoListId);

  if (!data) {
    return rejectWithValue('Todo-lists not found');
  }

  return data;
});

export const deleteTask = createAsyncThunk<
  { taskId: string },
  DeleteParametersData,
  { rejectValue: string }
>('tasks/deleteTask', async ({ todoListId, taskId }, { rejectWithValue }) => {
  const data = await fetchTasks.deleteTask(todoListId, taskId);
  if (!data) {
    return rejectWithValue('Title is not assiagment');
  }

  return { taskId };
});

export const createTask = createAsyncThunk<
  Response<{ item: TaskType }>,
  CreateParametersData,
  { rejectValue: string }
>('tasks/createTask', async ({ todoListId, taskTitle }, { rejectWithValue }) => {
  const data = await fetchTasks.createTask(todoListId, taskTitle);
  if (!data) {
    return rejectWithValue('Title is not assiagment');
  }

  return data;
});

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (
    {
      todoListId,
      taskId,
      model,
    }: {
      todoListId: string | undefined;
      taskId: string | undefined;
      model: UpdateTaskModel;
    },
    { rejectWithValue, getState },
  ) => {
    const state = getState() as RootState;
    const task: TaskType | undefined = state.tasks.tasks.find(
      item => item.todoListId === todoListId,
    );

    const apiModel: UpdateTaskModel = {
      title: task?.title,
      description: task?.description,
      status: task?.status,
      priority: task?.priority,
      startDate: task?.startDate,
      deadline: task?.deadline,
      ...model,
    };

    const data: Response<{ item: TaskType }> = await fetchTasks.updateTask(
      todoListId,
      taskId,
      apiModel,
    );

    if (!data) {
      return rejectWithValue('Title is not assiagment');
    }

    return data;
  },
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTasks.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.tasks = action.payload.items;
        state.loading = false;
      })
      .addCase(deleteTask.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => {
          return task.id !== action.payload.taskId;
        });
        state.loading = false;
      })
      .addCase(createTask.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.unshift(action.payload.data.item);
        state.loading = false;
      })
      .addCase(updateTask.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const existingTaskId = state.tasks.findIndex(
          task => task.id === action.payload.data.item.id,
        );
        const existingTask = state.tasks[existingTaskId];
        let updatedTasks;
        if (existingTask) {
          const updatedTask = {
            ...existingTask,
            title: action.payload.data.item.title,
          };
          updatedTasks = state.tasks;
          updatedTasks[existingTaskId] = updatedTask;
        } else {
          updatedTasks = state.tasks.concat(action.payload.data.item);
        }
        state.loading = false;
      });
  },
});

export default tasksSlice;
