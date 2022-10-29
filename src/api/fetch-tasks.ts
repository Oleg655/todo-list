const apiKey = process.env.REACT_APP_API_KEY || '';

const fetchTasks = {
  getTasks: async (
    baseUrl: string | undefined,
    todoListId: string,
  ): Promise<GetTasksResponse> => {
    const response = await fetch(`${baseUrl}/todo-lists/${todoListId}/tasks`, {
      method: 'GET',
      credentials: 'include',
    });
    const data = await response.json();
    return data;
  },
  createTask: async (
    baseUrl: string | undefined,
    todoListId: string,
    newTaskTitle: { title: string },
  ): Promise<Response<TaskType>> => {
    const response = await fetch(`${baseUrl}/todo-lists/${todoListId}/tasks`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(newTaskTitle),
      headers: {
        'API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
  deleteTask: async (
    baseUrl: string | undefined,
    todoListId: string,
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
    baseUrl: string | undefined,
    todoListId: string,
    taskId: string,
    model: UpdateTaskModel,
  ): Promise<Response> => {
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

type Response<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  fieldsErrors: Array<string>;
  data: D;
};

type GetTasksResponse = {
  error: string | null;
  items: TaskType;
  totalCount: number;
};

type TaskType = {
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

type UpdateTaskModel = {
  title: string;
  description: string;
  status: number;
  priority: number;
  startDate: string;
  deadline: string;
};
