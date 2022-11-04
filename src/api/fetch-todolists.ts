const apiKey = process.env.REACT_APP_API_KEY || '';
const baseUrl = process.env.REACT_APP_BASE_URL || '';

const fetchTodoList = {
  getTodoLists: async (): Promise<TodoListType[]> => {
    const response = await fetch(`${baseUrl}/todo-lists`, {
      method: 'GET',
      credentials: 'include',
    });

    const todoLists = await response.json();
    return todoLists;
  },
  createTodoList: async (
    newTitle: string,
  ): Promise<ResponseType<{ item: TodoListType }>> => {
    const response = await fetch(`${baseUrl}/todo-lists/`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ title: newTitle }),
      headers: {
        'API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  },
  deleteTodoList: async (todoListId: string): Promise<ResponseType<{}>> => {
    const response = await fetch(`${baseUrl}/todo-lists/${todoListId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'API-KEY': apiKey,
      },
    });

    const data = await response.json();
    return data;
  },
  updateTodoList: async (
    todoListId: string,
    newTitle: string,
  ): Promise<ResponseType<{}>> => {
    const response = await fetch(`${baseUrl}/todo-lists/${todoListId}`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify({ title: newTitle }),
      headers: {
        'API-KEY': apiKey,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data;
  },
};

export default fetchTodoList;

export type ResponseType<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  fieldsErrors: Array<string>;
  data: D;
};

export type TodoListType = {
  id: string;
  addedDate: string;
  order: number;
  title: string;
};
