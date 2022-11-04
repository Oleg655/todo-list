const apiKey = process.env.REACT_APP_API_KEY || '';
const baseUrl = process.env.REACT_APP_BASE_URL || '';

const fetchTasks = {
  getTasks: async (todoListId: string | undefined): Promise<GetTasksResponse> => {
    const response = await fetch(`${baseUrl}/todo-lists/${todoListId}/tasks`, {
      method: 'GET',
      credentials: 'include',
    });
    const data = await response.json();
    return data;
  },
  createTask: async (
    todoListId: string | undefined,
    title: string,
  ): Promise<Response<{ item: TaskType }>> => {
    const response = await fetch(`${baseUrl}/todo-lists/${todoListId}/tasks`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ title }),
      headers: {
        'API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
  deleteTask: async (
    todoListId: string | undefined,
    taskId: string,
  ): Promise<Response> => {
    const response = await fetch(`${baseUrl}/todo-lists/${todoListId}/tasks/${taskId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'API-KEY': apiKey,
      },
    });
    const data = await response.json();
    return data;
  },
  updateTask: async (
    todoListId: string | undefined,
    taskId: string | undefined,
    model: UpdateTaskParamsModel,
  ): Promise<Response<{ item: TaskType }>> => {
    const response = await fetch(`${baseUrl}/todo-lists/${todoListId}/tasks/${taskId}`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(model),
      headers: {
        'API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
};

export default fetchTasks;

export type Response<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  fieldsErrors: Array<string>;
  data: D;
};

export type GetTasksResponse = {
  error: string | null;
  items: TaskType[];
  totalCount: number;
};

export type TaskType = {
  description: string;
  title: string;
  status: number;
  priority: number;
  startDate: string;
  deadline: string;
  id: string;
  todoListId: string;
  order: number;
  addedDate: string;
};

export type UpdateTaskParamsModel = {
  title?: string | undefined;
  description?: string | undefined;
  status?: number | undefined;
  priority?: number | undefined;
  startDate?: string | undefined;
  deadline?: string | undefined;
};
